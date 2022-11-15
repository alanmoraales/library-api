import { registerAs } from '@nestjs/config';

export default registerAs('config', () => {
  return {
    postgres: {
      dbName: process.env.POSTGRES_DB,
      port: parseInt(process.env.POSTGRES_PORT, 10),
      password: process.env.POSTGRES_PASSWORD,
      user: process.env.POSTGRES_USER,
      host: process.env.POSTGRES_HOST,
      // heroku postgres env name
      url: process.env.DATABASE_URL,
    },
    jwt: {
      secret: process.env.JWT_SECRET_KEY,
      expiresIn: process.env.JWT_EXPIRATION,
    },
    mailgun: {
      auth: {
        api_key: process.env.MAILGUN_API_KEY,
        domain: process.env.MAILGUN_EMAIL_DOMAIN,
      },
      fromAddress: process.env.MAILGUN_FROM_ADDRESS,
    },
    graphQLServer: {
      allowIntrospection: Boolean(process.env.ALLOW_INTROSPECTION),
    },
  };
});
