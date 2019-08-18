import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sumary',
  templateUrl: './sumary.component.html',
  styleUrls: ['./sumary.component.css']
})
export class SumaryComponent implements OnInit {
  question = {
    text: 'Scrieti un rezumat al textului citit.'
  };

  constructor() {}

  ngOnInit() {}
}
