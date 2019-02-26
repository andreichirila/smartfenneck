import * as fs from 'fs-extra';
import {FileModel} from '../models/file';

export class FileController {

    private fileModel = new FileModel();
    private fs = fs;

    constructor() {
    }

    public upload() {
        this.fileModel.createFilesTable();
    }
}
