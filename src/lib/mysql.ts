import mysql from 'mysql2/promise';

const config = {
    host: 'localhost',
    user: 'root',
    password: 'P@$$w0rd1',
    database: 'kashin_staging',
    port: Number('3306'),
    waitForConnections: true,
}


export const db = mysql.createPool(config);
