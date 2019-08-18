import { Component, OnInit } from '@angular/core';
import { c } from '@angular/core/src/render3';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormWordComponent } from './form-word/form-word.component';
import { DeleteWordComponent } from './delete-word/delete-word.component';
import { TouchSequence } from 'selenium-webdriver';
import { DictionaryService } from '../../dictionary.service';

@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.css']
})
export class DictionaryComponent implements OnInit {
  alphabet = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z'
  ];
  dictionary;
  wordsList = [];
  searchedWord: string;

  constructor(
    private modalService: NgbModal,
    private dictionaryService: DictionaryService
  ) {}

  ngOnInit() {
    this.getWords();
  }

  getWords() {
    this.dictionaryService.getAll().subscribe(resp => {
      this.dictionary = JSON.parse((<any>resp)._body);
      this.getAllWords(this.dictionary);
    });
  }

  getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  getAllWords(dictionary) {
    this.wordsList = [];
    for (const propt in dictionary) {
      if (dictionary.hasOwnProperty(propt)) {
        dictionary[propt].forEach(element => {
          this.wordsList.push(element);
        });
      }
    }
  }

  selectLetterForSpecificWords(letter) {
    this.wordsList = [];
    this.dictionaryService.filterWordsByLetter(letter).subscribe(resp => {
      console.log(JSON.parse((<any>resp)._body));
      this.wordsList = JSON.parse((<any>resp)._body);
    });
  }

  searchWord() {
    this.dictionaryService.searchWord(this.searchedWord).subscribe(resp => {
      this.wordsList = JSON.parse((<any>resp)._body);
    });
    // const list = [];
    // this.wordsList.forEach((item, index) => {
    //   if (!item.word.indexOf(this.searchedWord)) {
    //     list.push(item);
    //   }
    // });
    // this.wordsList = list;
  }

  openFormModal(word) {
    const modalRef = this.modalService.open(FormWordComponent);
    modalRef.componentInstance.word = word;

    modalRef.result
      .then(result => {
        console.log(result);
      })
      .catch(error => {
        console.log(error);
      });
  }

  openDeleteWordModal(w) {
    const modalRef = this.modalService.open(DeleteWordComponent);
    modalRef.componentInstance.word = w;

    modalRef.result
      .then(result => {
        console.log(result);
      })
      .catch(error => {
        console.log(error);
      });
  }
}
