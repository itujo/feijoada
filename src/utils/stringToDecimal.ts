import { Prisma } from '@prisma/client';

const stringToDecimal = (string: string) => {
  try {
    const r = new Prisma.Decimal(
      string
        .replaceAll(/[.]/g, '')
        .replaceAll(/[,]/g, '.')
        .replaceAll('R$', '')
        .replaceAll(' ', ''),
    );

    return r;
  } catch (error) {
    return new Prisma.Decimal(0);
  }
};

export { stringToDecimal };
