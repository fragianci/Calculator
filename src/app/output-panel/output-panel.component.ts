import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { OpNumberService } from '../op-number.service';

interface opNumber {
  num: number;
  op: string;
}

@Component({
  selector: 'app-output-panel',
  templateUrl: './output-panel.component.html',
  styleUrls: ['./output-panel.component.scss']
})
export class OutputPanelComponent implements OnInit {
  result = 0;
  opNumbers: opNumber[];
  resultSub: Subscription;
  opNumbersSub: Subscription;
  constructor(private calculatorService: OpNumberService) { }

  ngOnInit(): void {
    this.opNumbersSub = this.calculatorService.opNumbersEmitted.subscribe(
      opNumbers => {
        this.opNumbers = opNumbers.slice()
      }
    )
    this.resultSub = this.calculatorService.resultEmitted.subscribe(
      (result: number) => {
        this.result = result;
      }
    )
  }

  ngOnDestroy(): void {
    this.resultSub.unsubscribe();
  }

}
