import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lyrics',
  templateUrl: './lyrics.component.html',
  styleUrls: ['./lyrics.component.css']
})
export class LyricsComponent implements OnInit {
  question = {
    text: 'Scrieti un cvintet sugestiv pentru acest text.'
  };

  constructor() {}

  ngOnInit() {}
}
