import { Input, Component, OnInit, AfterViewInit, AfterContentChecked } from '@angular/core';
import { Risk, Questions } from '../models/data';
import { RISKS } from '../models/risk-questionair';
import { FormControl, FormGroup } from '@angular/forms';
import { QuestionControlService } from '../services/question-control.service';
import { QuestionService } from '../services/question.service';
import { QuestionBase } from '../models/data';

@Component({
  selector: 'app-risk-profile',
  templateUrl: './risk-profile.component.html',
  styleUrls: ['./risk-profile.component.sass']
})
export class RiskProfileComponent implements OnInit {

  // @Input() questions: QuestionBase<any>[] = [];
  form: FormGroup;
  payLoad = '';

  value: number[];
  selectedValue: string;
  constructor(
    // private qcs: QuestionControlService,
    // private questionService: QuestionService
  ) {
    // this.questions = this.questionService.getQuestions();
  }

  ngOnInit() {
    this.value = [3, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    // this.form = this.qcs.toFormGroup(this.questions);

  }
  onSubmit() {
    // this.payLoad = JSON.stringify(this.form.value);
  }

}
