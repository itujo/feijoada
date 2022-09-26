import { parse } from 'csv-parse';
import { createReadStream } from 'fs';

const parseCsv = async (filePath: string) => {
  const parser = createReadStream(filePath).pipe(
    parse({
      relaxColumnCount: true,
      delimiter: ';',
    }),
  );

  const records: string[][] = [];

  for await (const record of parser) {
    records.push(record);
  }

  return records;
};

export { parseCsv };
