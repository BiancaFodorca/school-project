import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css']
})
export class UploadImageComponent implements OnInit {
  fileToUpload: File = null;
  question = {
    text: 'Incarcati o fotografie sugestiva textului citit.'
  };
  imageUploaded = null;

  constructor() {}

  ngOnInit() {}

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }

  savePhoto() {
    console.log('save photo');
  }
}
