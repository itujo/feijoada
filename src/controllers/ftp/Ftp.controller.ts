/* eslint-disable no-console */
import { existsSync, mkdirSync } from 'fs';
import { readdir } from 'fs/promises';
import { INTERNATIONAL_FILE_PATH, NATIONAL_FILE_PATH } from '../../constants';
import { createClient } from '../../services/Ftp';

type Type = 'INTERNATIONAL' | 'NATIONAL';

const downloadFtpFiles = async (type: Type) => {
  const path =
    type === 'INTERNATIONAL' ? INTERNATIONAL_FILE_PATH : NATIONAL_FILE_PATH;

  console.log('\n-----------------');
  console.log(`\nstarting to download ${type} files`);
  console.log(`\nfiles will be downloaded to ${path}`);
  console.log('\n-----------------');

  try {
    // create ftp client
    if (!existsSync(path)) {
      mkdirSync(path, { recursive: true });
    }

    const storedFiles = await readdir(path);

    const client = await createClient(type);

    const ftpFiles = await client.list();

    if (ftpFiles.length < 1) {
      throw new Error('no files in ftp server');
    }

    for await (const file of ftpFiles) {
      if (file.name.includes('EXTRATO_PREVIA')) {
        if (!storedFiles.includes(file.name)) {
          console.log(`started to download file ${file.name}`);

          await client.downloadTo(`${path}/${file.name}`, file.name);
          console.log(`File ${file.name} downloaded successfully`);
        } else {
          console.log(`File ${file.name} already exists`);
        }
      }
    }
  } catch (error) {
    console.log(error);
  }
};

export { downloadFtpFiles };
