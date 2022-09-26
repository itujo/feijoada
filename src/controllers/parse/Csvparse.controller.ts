/* eslint-disable no-console */
import { readdir } from 'fs/promises';
import path from 'path';
import { INTERNATIONAL_FILE_PATH, NATIONAL_FILE_PATH } from '../../constants';
import { prisma } from '../../lib/prisma';
import { parseCsv } from '../../services/parseFile';

type Type = 'INTERNATIONAL' | 'NATIONAL';

const parseFiles = async (type: Type) => {
  const files = await prisma.file.findMany({
    select: {
      name: true,
    },
    where: {
      debitsProcessed: true,
      creditsProcessed: true,
    },
  });

  const filesSave = files.map((f) => f.name);

  const folderPath =
    type === 'INTERNATIONAL' ? INTERNATIONAL_FILE_PATH : NATIONAL_FILE_PATH;

  const storedFiles = await readdir(folderPath);

  const data = [];

  console.log('\n-----------------');
  console.log(`\nstarting to parse ${type} files`);
  console.log('\n-----------------');

  for await (const fileName of storedFiles) {
    if (!filesSave.includes(fileName)) {
      const filePath = path.join(folderPath, fileName);

      const r = await parseCsv(filePath);

      const obj = { fileName, data: r, fileType: type };

      data.push(obj);
      console.log('\n-----------------');
      console.log(`\nsuccess parsing ${fileName}`);
      console.log('\n-----------------');
    }
  }

  console.log('\n-----------------');
  console.log(`\nparsed all file`);
  console.log('\n-----------------');

  return data;
};

export { parseFiles };
