import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { OpNumberService } from '../op-number.service';

@Component({
  selector: 'app-output-panel',
  templateUrl: './output-panel.component.html',
  styleUrls: ['./output-panel.component.scss']
})
export class OutputPanelComponent implements OnInit {
  result = 0;
  opNumbers: Subscription;
  resultSub: Subscription;
  constructor(private calculatorService: OpNumberService) { }

  ngOnInit(): void {
    this.calculatorService.opNumbersEmitted.subscribe(
      opNumbers => {

      }
    )
    this.calculatorService.resultEmitted.subscribe(
      (result: number) => {
        this.result = result;
      }
    )
  }

  ngOnDestroy(): void {
    this.resultSub.unsubscribe();
  }

}
