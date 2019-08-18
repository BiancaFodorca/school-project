import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  question = {
    text:
      'Care este proverbul sau citatul cel mai sugestiv sugerat de acest text?'
  };
  quote: string;

  constructor() {}

  ngOnInit() {}
}
