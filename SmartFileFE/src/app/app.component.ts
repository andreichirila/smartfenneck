import {Component} from '@angular/core';
import {UploadFileService} from './rest-services/upload-file.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    constructor(private uploadFileService: UploadFileService) {
    }

    public onFileSelected(file: File) {
        this.uploadFileService.uploadFile(file).subscribe()
    }
}
