import {DB} from '../db/connect-db';

const querys = {
    useSmartFilesDB: 'USE SmartFile;',
    createFilesTable: 'CREATE TABLE  IF NOT EXISTS `file` (' +
        '  `id` int(11) NOT NULL,\n' +
        '  `name` varchar(255) NOT NULL,\n' +
        '  `description` text NOT NULL,\n' +
        '  `type` varchar(100) NOT NULL,\n' +
        '  `size` int(11) NOT NULL,\n' +
        '  `updated_by` varchar(255) NOT NULL,\n' +
        '  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP\n' +
        ');'
};

export class FileModel {

    private db;

    constructor() {
        this.db = new DB();
    }

    public createFilesTable() {
        this.db.connectToDB(querys.createFilesTable);
    }
}
