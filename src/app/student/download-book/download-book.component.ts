import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-download-book',
  templateUrl: './download-book.component.html',
  styleUrls: ['./download-book.component.css']
})
export class DownloadBookComponent implements OnInit {
  linkBook = 'cartea-mea.jpg';
  linkAttachmentsList = ['cap1.png', 'cap2.png', 'cap3.pdf'];

  constructor() {}

  ngOnInit() {}
}
