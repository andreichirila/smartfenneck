import * as fs from 'fs-extra';
import * as multer from 'multer';

import {FileModel} from '../models/file';
import {uploadPath} from '../local_config/upload-path';

export class FileController {

    private fileModel = new FileModel();
    private multer = multer;
    private uploadDIR = uploadPath;
    private fs = fs;
    private multerUpload;

    constructor() {
        this.multerUpload = this.multer({dest: this.uploadDIR}).single('file');
    }

    public upload(req, res) {
        return this.multerUpload(req, res, (err) => {
            if (err) {
                // An error occurred when uploading
                console.log(err);
                return res.status(422).send('an Error occured')
            }
            // No error occured.
            const path = req.file.path;
            this.fileModel.insertFileInDB(
                req.file.filename,
                req.file.originalname,
                req.file.size,
                req.file.path,
                req.file.mimetype,
            );
            return res.send('Upload Completed for ' + path).status('OK');
        });
    }
}
