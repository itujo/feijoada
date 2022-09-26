import { parse } from 'date-fns';
import { isNumber } from './isNumber';

const getDateFromFileName = (fileName: string) => {
  const d = fileName
    .match(/_[0-9]{8}_/g)
    ?.at(0)
    ?.replaceAll('_', '');

  if (!d) {
    throw new Error('Invalid date');
  }

  const date = parse(d, 'ddMMyyyy', new Date());

  return date;
};

const getDateFromString = (str: string) => {
  const date = parse(str, 'dd/MM/yyyy', new Date());

  return date;
};

const parseAdiantamento = (str: string) => {
  if (
    str.length === 30 &&
    str.includes('ADIANTAMENTO') &&
    isNumber(str.at(-1)!)
  ) {
    const b = str.split('-');

    return parse(`${b[1]}/2022`, 'dd/MM/yyyy', new Date());
  }

  return null;
};

export { getDateFromFileName, getDateFromString, parseAdiantamento };
