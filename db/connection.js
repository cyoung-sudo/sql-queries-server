import mysql from 'mysql2/promise';

export const connection = await mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: process.env.MYYSQL_PASS,
  database: 'sql_queries',
});