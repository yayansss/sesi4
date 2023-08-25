import mysql from 'mysql2/promise';

const dbPool = mysql.createPool({
    host: "localhost", 
    user:"root", 
    password: '**********',
    database: "dbsesi4",
    port: 3308
})
export default dbPool;