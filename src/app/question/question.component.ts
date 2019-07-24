import { Component, OnInit, Input } from '@angular/core';
import { QuestionBase } from '../models/data';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.sass']
})
export class QuestionComponent implements OnInit {

  // selected: number
  @Input() question: QuestionBase<any>;
  @Input() form: FormGroup;
  @Input() selected: number;
  

  val = new FormControl(this.selected);
  constructor() {
    // this.form = new FormGroup({
    //   question.key: new FormControl()
  
    // });
   }

  ngOnInit() {
  //   this.form = new FormGroup({
  //     question.key: new FormControl();
  //  });
    
  }

}
