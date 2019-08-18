import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  questions = [
    {
      id: 1,
      question: 'Introduceti cuvinte in dictionar',
      exerciseNumber: 1,
      userId: 1
    },
    {
      id: 2,
      question:
        'Cautati pe internet o imagine sugestiva, ulterior incarcati-o pe pagina',
      exerciseNumber: 2,
      userId: 1
    },
    {
      id: 3,
      question:
        'Care a fost citatul care a ramas in mintea ta dupa citirea capitolului',
      exerciseNumber: 3,
      userId: 1
    },
    {
      id: 4,
      question: 'Cum v-ati simtit dupa citirea acestui capitol?',
      exerciseNumber: 4,
      userId: 1
    },
    {
      id: 5,
      question: 'Cvintet?',
      exerciseNumber: 5,
      userId: 1
    },
    {
      id: 6,
      question:
        // tslint:disable-next-line:max-line-length
        'Rezumat - Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus. Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus. Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.',
      exerciseNumber: 6,
      userId: 1
    },
    {
      id: 7,
      question: 'Harta conceptionala',
      exerciseNumber: 7,
      userId: 1
    }
  ];
  selectedQuestion;
  showEditQuestionTextarea = false;
  editedSelectedQuestion: string;

  constructor() {}

  ngOnInit() {}

  editQuestion(question) {
    this.selectedQuestion = question;
    this.showEditQuestionTextarea = true;
    this.editedSelectedQuestion = question.question;
  }

  saveEditedQuestion() {
    this.questions.forEach((q, i) => {
      console.log(q.id);
      if (q.id === this.selectedQuestion.id) {
        q.question = this.editedSelectedQuestion;
        this.clearSelectedQuestionItems();
      }
    });
  }

  cancelEditingAction() {
    this.clearSelectedQuestionItems();
  }

  clearSelectedQuestionItems() {
    this.selectedQuestion = null;
    this.showEditQuestionTextarea = false;
    this.editedSelectedQuestion = null;
  }
}
