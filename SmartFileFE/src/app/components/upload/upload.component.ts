import {Component, ElementRef, EventEmitter, HostListener, Input, Output, ViewChild} from '@angular/core';

@Component({
    selector: 'sf-upload',
    templateUrl: './upload.component.html',
    styleUrls: ['./upload.component.scss']
})
export class UploadComponent {

    @ViewChild('file')
    public file: ElementRef;

    @Input()
    public acceptFiles = '*';

    @Output()
    public fileSelection = new EventEmitter<File>();

    constructor() {
    }

    @HostListener('click')
    triggerFileSystem() {
        this.file.nativeElement.click();
    }

    public selectFile(e: Event) {
        const target = e.target as HTMLInputElement;

        if (target && target.files && target.files.length) {
            this.fileSelection.emit(target.files[0]);
        }
        target.value = '';
    }

}
