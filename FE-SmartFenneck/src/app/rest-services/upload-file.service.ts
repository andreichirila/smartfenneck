import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {generateApiRoute} from '../api-routes/utils/generate-api-route';
import {ApiRoute} from '../api-routes/enums/api-route';

@Injectable({
    providedIn: 'root'
})
export class UploadFileService {
    constructor(private httpClient: HttpClient) {
    }

    public uploadFile(file: File) {
        const formData = new FormData();
        const headers = new HttpHeaders();
        formData.append('file', file, file.name);
        console.log(formData);
        headers.append('Content-Type', 'multipart/form-data');
        return this.httpClient.post(generateApiRoute(ApiRoute.UploadFile), formData, {headers: headers});
    }
}
