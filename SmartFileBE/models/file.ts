import {DB} from '../db/connect-db';

const querys = {
    createFileTable: () => {
        return 'CREATE TABLE  IF NOT EXISTS `file` (' +
            '  `id` int NOT NULL AUTO_INCREMENT,\n' +
            '  `name` varchar(255) NOT NULL,\n' +
            '  `description` text NOT NULL,\n' +
            '  `size` int(11) NOT NULL,\n' +
            '  `path` varchar(255) NOT NULL,\n' +
            '  `updated_by` varchar(255),\n' +
            '  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,\n' +
            '  `mime_type` varchar(255) NOT NULL,\n' +
            'PRIMARY KEY (id)' +
            ');'
    },
    insertFileInDB: (name, description, size, path, mimeType) => {
        return `INSERT INTO file (name,description,size,path,updated_by,updated_at,mime_type) 
                VALUES('${name}','${description}',${size},'${path}','anonym',CURRENT_TIMESTAMP,'${mimeType}')`;
    }
};

export class FileModel {

    private db;

    constructor() {
        this.db = new DB();
    }

    public createFileTable() {
        return this.db.connectToDB(querys.createFileTable());
    }

    public insertFileInDB(name, description, size, path, mimeType) {
        return this.db.connectToDB(querys.insertFileInDB(name, description, size, path, mimeType));
    }
}
