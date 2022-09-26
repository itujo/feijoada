import type { City, File, Prisma, State } from '@prisma/client';
import { prisma } from '../../lib/prisma';
import { arrayIsEqual } from '../../utils/arrayIsEqual';
import { arraySplitter } from '../../utils/arraySplitter';
import { findItemInArray } from '../../utils/findItemInArray';
import {
  getDateFromFileName,
  getDateFromString,
  parseAdiantamento,
} from '../../utils/getDateFromFileName';
import { stringToDecimal } from '../../utils/stringToDecimal';

const saveHeaders = async (
  data: {
    fileName: string;
    data: string[][];
    fileType: 'INTERNATIONAL' | 'NATIONAL';
  }[],
) => {
  const files: File[] = [];
  try {
    for await (const d of data) {
      const headerData = d.data[1];

      if (!headerData || !headerData[0]) {
        // eslint-disable-next-line no-continue
        continue;
      } else {
        const fi = await prisma.file.findMany({
          select: {
            name: true,
          },
          where: {
            processed: true,
          },
        });

        const filesSave = fi.map((f) => f.name);

        const date = getDateFromFileName(d.fileName);
        try {
          if (!filesSave.includes(d.fileName)) {
            try {
              const file = await prisma.file.create({
                data: {
                  name: d.fileName,
                  date,
                  company: {
                    connectOrCreate: {
                      where: {
                        cnpj: headerData[0]!,
                      },
                      create: {
                        cnpj: headerData[0]!,
                        name: headerData[1]! || '',
                        clientCode: headerData[2]! || '',
                        contractNumber: headerData[3]! || '',
                        contractDr: headerData[4]! || '',
                      },
                    },
                  },
                  fileType: d.fileType,
                },
              });

              files.push(file);
            } catch (error) {
              console.log(error);
            }
          }
        } catch (error) {
          // eslint-disable-next-line no-console
          console.log(error);
          throw new Error('could not create file');
        }
      }
    }

    return files;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    return new Error('could not create file');
  }
};

const saveMovements = async (
  data: {
    fileName: string;
    data: string[][];
  }[],
) => {
  console.log('\n-----------------');
  console.log('MOVEMENTS');
  console.log('\n-----------------');
  const files = await prisma.file.findMany();
  const centerOfCosts = await prisma.company.findMany();

  const postalCards = await prisma.postalCard.findMany();
  const postingUnits = await prisma.postingUnit.findMany();
  const services = await prisma.service.findMany();
  const cities = await prisma.city.findMany({
    include: {
      state: true,
    },
  });

  for await (const d of data) {
    const lines = d.data;
    let index = 0;
    const dataToSave: Prisma.MovementCreateManyInput[] = [];

    // const f = findItemInArray()
    const file = findItemInArray(files, 'name', d.fileName);

    if (file?.movementsProcessed) {
      return;
    }

    for await (const line of lines) {
      if (index > 2) {
        if (line.length === 30) {
          const dict = {
            centerOfCostCode: line[0]!,
            centerOfCostName: line[1]!,
            postalCardNumber: line[2]!,
            postalCardOwner: line[3]!,
            postingDate: getDateFromString(line[4]!),
            serviceCode: parseInt(line[5]!, 10),
            serviceName: line[6]!,
            itemQty: parseInt(line[7]!, 10),
            weight: parseInt(line[8]!, 10),
            unitServiceCost: stringToDecimal(line[9]!),
            serviceCost: stringToDecimal(line[10]!),
            docNumber: line[11]!,
            label: line[12]!,
            declaredValue: stringToDecimal(line[13]!),
            discountValue: stringToDecimal(line[14]!),
            operationalDiscountCode: parseInt(line[15]!, 10),
            additionalDiscountCode: line[16]!,
            postingUnit: line[17]!,
            originPostalCode: line[18]!,
            originCity: line[19]!,
            originState: line[20]!,
            destinationPostalCode: line[21]!,
            destinationCity: line[22]!,
            destinationState: line[23]!,
            height: parseInt(line[24]!, 10),
            width: parseInt(line[25]!, 10),
            length: parseInt(line[26]!, 10),
            diameter: parseInt(line[27]!, 10),
            realWeight: parseInt(line[28]!, 10),
          };

          const centerOfCost = findItemInArray(
            centerOfCosts,
            'clientCode',
            dict.centerOfCostCode,
          );

          let postalCard = findItemInArray(
            postalCards,
            'number',
            dict.postalCardNumber,
          );

          if (!postalCard) {
            postalCard = await prisma.postalCard.create({
              data: {
                number: dict.postalCardNumber,
                owner: dict.postalCardOwner,
              },
            });
            postalCards.push(postalCard);
          }

          let postingUnit = findItemInArray(
            postingUnits,
            'name',
            dict.postingUnit,
          );

          if (!postingUnit) {
            postingUnit = await prisma.postingUnit.create({
              data: {
                name: dict.postingUnit,
              },
            });
            postingUnits.push(postingUnit);
          }

          let service = findItemInArray(services, 'code', dict.serviceCode);

          if (!service) {
            service = await prisma.service.create({
              data: {
                code: dict.serviceCode,
                name: dict.serviceName,
              },
            });
            services.push(service);
          }

          let originCity = findItemInArray(cities, 'name', dict.originCity);

          if (!originCity) {
            originCity = (await prisma.city.create({
              data: {
                name: dict.originCity,
                state: {
                  connectOrCreate: {
                    where: {
                      name: dict.originState,
                    },
                    create: {
                      name: dict.originState,
                    },
                  },
                },
              },
            })) as City & { state: State };
            cities.push(originCity);
          }

          let destinationCity = findItemInArray(
            cities,
            'name',
            dict.destinationCity,
          );

          if (!destinationCity) {
            destinationCity = (await prisma.city.create({
              data: {
                name: dict.destinationCity,
                state: {
                  connectOrCreate: {
                    where: {
                      name: dict.destinationState,
                    },
                    create: {
                      name: dict.destinationState,
                    },
                  },
                },
              },
            })) as City & { state: State };
            cities.push(destinationCity);
          }

          const obj: Prisma.MovementCreateManyInput = {
            additionalServiceCode: parseInt(dict.additionalDiscountCode, 10),
            centerOfCostId: centerOfCost!.id,
            destinationCityId: destinationCity!.id,
            destinationPostalCode: dict.destinationPostalCode,
            diameter: dict.diameter,
            discountValue: dict.discountValue,
            documentNumber: dict.docNumber,
            fileId: file!.id,
            height: dict.height,
            itemQty: dict.itemQty,
            label: dict.label,
            length: dict.length,
            operationalDiscountCode: dict.operationalDiscountCode,
            originCityId: originCity.id,
            originPostalCode: dict.originPostalCode,
            postalCardId: postalCard!.id,
            postingDate: dict.postingDate,
            postingUnitId: postingUnit.id,
            realWeight: dict.realWeight,
            serviceId: service.id,
            serviceValue: dict.serviceCost,
            unitCost: dict.unitServiceCost,
            weight: dict.weight,
            width: dict.width,
          };

          dataToSave.push(obj);
        }
      }

      index += 1;
    }

    if (dataToSave.length > 0) {
      const splitted = arraySplitter(dataToSave, 50000);

      // let total = 0;
      for await (const split of splitted) {
        await prisma.movement.createMany({
          data: split.map((n) => n),
        });
        // total += movs.count;
      }

      // const lastLine = lines[lines.length - 1]?.at(0);

      // if (total !== parseInt(lastLine!, 10)) {
      //   console.log({
      //     message: 'total not match',
      //     fileName: d.fileName,
      //   });

      //   throw new Error('STAP');
      // }
    }

    await prisma.file.update({
      where: {
        name: d.fileName,
      },
      data: {
        movementsProcessed: true,
      },
    });
  }
};

const saveCredits = async (
  data: {
    fileName: string;
    data: string[][];
  }[],
) => {
  const headers = {
    credits: ['Descrição Crédito', 'Valor Crédito', ''],
    debits: ['Descrição Débito ou Encargos', 'Valor Débito', ''],
  };
  const files = await prisma.file.findMany();

  console.log('\n-----------------');
  console.log('CREDITS');
  console.log('\n-----------------');

  // const credits = await prisma.credits.findMany();

  for await (const d of data) {
    const lines = d.data;
    // const index = 0;
    const dataToSave: Prisma.CreditsCreateManyInput[] = [];

    // const f = findItemInArray()
    const file = findItemInArray(files, 'name', d.fileName);

    if (!file || file?.creditsProcessed) {
      return;
    }

    let start = false;

    for await (const line of lines) {
      if (line.length === 3) {
        if (arrayIsEqual(line, headers.credits)) {
          start = true;
          // eslint-disable-next-line no-continue
          continue;
        }
        if (arrayIsEqual(line, headers.debits)) {
          start = false;
        }
        if (start) {
          const dict = {
            description: line[0]!,
            value: stringToDecimal(line[1]!),
            date: parseAdiantamento(line[0]!),
          };

          const credit = await prisma.credits.findFirst({
            where: {
              description: dict.description,
              value: dict.value,
              date: dict.date,
            },
          });

          if (credit) {
            // eslint-disable-next-line no-continue
            continue;
          }

          const obj: Prisma.CreditsCreateManyInput = {
            description: dict.description,
            value: dict.value,
            fileId: file?.id,
            date: dict.date,
          };

          dataToSave.push(obj);
        }
      }
    }

    await prisma.credits.createMany({
      data: dataToSave.map((dt) => dt),
    });

    await prisma.file.update({
      where: {
        name: d.fileName,
      },
      data: {
        creditsProcessed: true,
      },
    });
  }
};

const saveDebits = async (
  data: {
    fileName: string;
    data: string[][];
  }[],
) => {
  const headers = {
    credits: ['Descrição Crédito', 'Valor Crédito', ''],
    debits: ['Descrição Débito ou Encargos', 'Valor Débito', ''],
  };
  const files = await prisma.file.findMany();

  console.log('\n-----------------');
  console.log('DEBITS');
  console.log('\n-----------------');

  // const credits = await prisma.credits.findMany();

  for await (const d of data) {
    const lines = d.data;
    // const index = 0;
    const dataToSave: Prisma.DebitsCreateManyInput[] = [];

    // const f = findItemInArray()
    const file = findItemInArray(files, 'name', d.fileName);

    if (!file || file?.debitsProcessed) {
      return;
    }

    let start = false;
    for await (const line of lines) {
      if (line.length === 3) {
        if (arrayIsEqual(line, headers.debits)) {
          start = true;
          // eslint-disable-next-line no-continue
          continue;
        }
        if (arrayIsEqual(line, headers.credits)) {
          start = false;
        }
        if (start) {
          const dict = {
            description: line[0]!,
            value: stringToDecimal(line[1]!),
            date: parseAdiantamento(line[0]!),
          };

          const debit = await prisma.debits.findFirst({
            where: {
              description: dict.description,
              value: dict.value,
              date: dict.date,
            },
          });

          if (debit) {
            // eslint-disable-next-line no-continue
            continue;
          }

          const obj: Prisma.DebitsCreateManyInput = {
            description: dict.description,
            value: dict.value,
            fileId: file?.id,
            date: dict.date,
          };

          dataToSave.push(obj);
        }
      }
    }

    await prisma.debits.createMany({
      data: dataToSave.map((dt) => dt),
    });

    await prisma.file.update({
      where: {
        name: d.fileName,
      },
      data: {
        debitsProcessed: true,
      },
    });
  }
};

export { saveHeaders, saveMovements, saveCredits, saveDebits };
