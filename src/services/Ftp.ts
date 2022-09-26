import { Client } from 'basic-ftp';
import 'dotenv/config';

type ConnectionData = 'INTERNATIONAL' | 'NATIONAL';

const createClient = async (options: ConnectionData) => {
  const credentials = {
    username: '',
    password: '',
    host: process.env.CORREIOS_FTP_HOST,
  };
  if (options === 'INTERNATIONAL') {
    credentials.username = process.env.INTERNATIONAL_FTP_USERNAME;
    credentials.password = process.env.INTERNATIONAL_FTP_PASSWORD;
  } else if (options === 'NATIONAL') {
    credentials.username = process.env.NATIONAL_FTP_USERNAME;
    credentials.password = process.env.NATIONAL_FTP_PASSWORD;
  } else {
    throw new Error('Invalid options');
  }
  try {
    const c = new Client();

    await c.access({
      host: credentials.host,
      user: credentials.username,
      password: credentials.password,
    });

    await c.cd('SFE');

    return c;
  } catch (error) {
    throw new Error('Error when trying to create ftp client');
  }
};

export { createClient };
