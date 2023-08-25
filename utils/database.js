import mysql from 'mysql2/promise';

const dbPool = mysql.createPool({
    host: "localhost", 
    user:"root", 
    password: '',
    database: "dbsesi4",
})

connection.connect(function(error){
    if(!!error){
      console.log(error);
    }else{
      console.log('Koneksi Berhasil!');
    }
  })
export default dbPool;