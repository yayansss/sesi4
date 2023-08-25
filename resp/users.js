import dbPool from "../utils/database.js";

export const getData = (id) => {
    if(!id){
        const sql = "SELECT user_id, name, email, password, FROM users";
        return dbPool.query(sql)
    } else{
        const sql = "SELECT user_id, name, email, password, FROM users WHERE user_id=?";
        const value = [id];
        return dbPool.query(sql, value)
    }
}