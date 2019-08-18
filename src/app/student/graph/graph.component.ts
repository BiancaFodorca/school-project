import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalGraphComponent } from './modal-graph/modal-graph.component';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {
  gradesList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  question = {
    text:
      'Oferiti note pe o scara de la 0 la 10 in functie de emotiile pe care le-ati simtit in momentul in care ati lecturat capitolul.'
  };
  gratefulGrade;
  optimismGrade;
  worryGrade;
  sadnessGrade;
  compassionGrade;
  loveGrade;
  frustrationGrade;
  emotionsArray = [];

  constructor(private modalService: NgbModal) {}

  ngOnInit() {}

  onSelectionGratefulChange(grade) {
    this.gratefulGrade = grade;
  }

  onSelectionWorryChange(grade) {
    this.worryGrade = grade;
  }

  onSelectionOptimismChange(grade) {
    this.optimismGrade = grade;
  }

  onSelectionSadnessChange(grade) {
    this.sadnessGrade = grade;
  }

  onSelectionCompassionChange(grade) {
    this.compassionGrade = grade;
  }

  onSelectionLoveChange(grade) {
    this.loveGrade = grade;
  }

  onSelectionFrustrationChange(grade) {
    this.frustrationGrade = grade;
  }

  showGraphic() {
    this.createDataMoldel();
    console.log(this.emotionsArray);
    const modalRef = this.modalService.open(ModalGraphComponent);
    modalRef.componentInstance.emotions = this.emotionsArray;

    modalRef.result
      .then(result => {
        console.log(result);
      })
      .catch(error => {
        console.log(error);
      });
  }

  createDataMoldel() {
    this.emotionsArray = [
      this.verifyNullity(this.gratefulGrade),
      this.verifyNullity(this.worryGrade),
      this.verifyNullity(this.optimismGrade),
      this.verifyNullity(this.sadnessGrade),
      this.verifyNullity(this.compassionGrade),
      this.verifyNullity(this.loveGrade),
      this.verifyNullity(this.frustrationGrade)
    ];
  }

  verifyNullity(score) {
    if (!score) {
      return 0;
    }
    return score;
  }
}
