require('dotenv').config();

module.exports = {
  production: {
    dialect: 'postgres',
    database: 'postgres',//process.env.DATABASE_NAME,
    username: 'postgres',//process.env.DATABASE_USERNAME,
    password: 'postgres',//process.env.DATABASE_PASSWORD,
    port: '5432',//process.env.DATABASE_PORT,
    host: 'db',//process.env.DATABASE_HOST,
  },
  test: {
    dialect: 'postgres',
    database: 'postgres',//process.env.DATABASE_NAME,
    username: 'postgres',//process.env.DATABASE_USERNAME,
    password: 'postgres',//process.env.DATABASE_PASSWORD,
    port: '5432',//process.env.DATABASE_PORT,
    host: 'db',//process.env.DATABASE_HOST,
  }
};
