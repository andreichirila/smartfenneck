import {pwd} from '../local_config/db-password';
import * as mysql from 'mysql';

export class DB {

    constructor() {
    }

    public connectToDB(query) {
        return this.createPool().getConnection((err, conn) => {
            try {
                conn.query(query);
                conn.release();
            } catch (e) {
                throw e;
            }
        });
    }

    private createPool() {
        return mysql.createPool(
            {
                host: 'localhost',
                user: 'root',
                password: pwd,
                database: 'SmartFile',
                connectionLimit: 20
            }
        );
    }
}
