import 'dotenv/config';
import path from 'path';

const INTERNATIONAL_FILE_PATH = path.join(__dirname, 'files', 'internacional');
const NATIONAL_FILE_PATH = path.join(__dirname, 'files', 'nacional');

const __prod__ = process.env.NODE_ENV === 'production';
const COOKIE_NAME = 'qid';

export { INTERNATIONAL_FILE_PATH, NATIONAL_FILE_PATH, __prod__, COOKIE_NAME };
