import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-upload-book',
  templateUrl: './upload-book.component.html',
  styleUrls: ['./upload-book.component.css']
})
export class UploadBookComponent implements OnInit {
  fileToUpload: File = null;
  name: string;
  displayMoreInputs = false;
  suplimentedFilesList = [];

  constructor(private bookService: BookService) {}

  ngOnInit() {}

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }

  handleSuplimentedFileInput(files: FileList) {
    this.suplimentedFilesList.push(files.item(0));
  }

  uploadMoreFiles() {
    this.displayMoreInputs = true;
  }

  uploadSelectedFile() {
    this.bookService.postFile(this.fileToUpload, this.name, 'carte').subscribe(
      data => {
        console.log(data);
        // do something, if upload success
      },
      error => {
        console.log(error);
      }
    );
  }

  uploadSelectedFiles() {
    console.log(this.suplimentedFilesList);
    if (this.suplimentedFilesList.length !== 0) {
      console.log(this.fileToUpload);
    }
  }
}
