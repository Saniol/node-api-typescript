const baseDir = process.env.NODE_ENV === 'development' ? 'src/' : 'dist/';

const { DB_HOST, DB_PORT, DB_USER, DB_USER_PWD, DB_NAME } = process.env;

module.exports = {
  type: 'postgres',
  host: DB_HOST,
  port: DB_PORT,
  username: DB_USER,
  password: DB_USER_PWD,
  database: DB_NAME,
  synchronize: false,
  entities: [
    `${baseDir}database/entity/*.js`,
    `${baseDir}database/entity/*.ts`,
  ],
  subscribers: [
    `${baseDir}database/subscriber/*.js`,
    `${baseDir}database/subscriber/*.ts`,
  ],
  migrations: [
    `${baseDir}database/migration/*.js`,
    `${baseDir}database/migration/*.ts`,
  ],
  cli: {
    entitiesDir: `${baseDir}database/entity`,
    migrationsDir: `${baseDir}database/migration`,
    subscribersDir: `${baseDir}database/subscriber`,
  },
};
