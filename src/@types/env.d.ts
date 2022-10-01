declare global {
  namespace NodeJS {
    interface ProcessEnv {
      POSTGRES_USER: string;
      POSTGRES_PW: string;
      POSTGRES_DB: string;
      POSTGRES_HOST: string;
      REDIS_URL: string;
      REDIS_PASSWORD: string;
      CORS_ORIGIN: string;
      SESSION_SECRET: string;
      NODE_ENV: string;
      CORREIOS_FTP_HOST: string;
      NATIONAL_FTP_USERNAME: string;
      NATIONAL_FTP_PASSWORD: string;
      INTERNATIONAL_FTP_USERNAME: string;
      INTERNATIONAL_FTP_PASSWORD: string;
      DATABASE_URL: string;
    }
  }
}

export {}
