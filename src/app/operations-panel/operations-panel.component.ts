import { OnInit, Component, Input } from '@angular/core';
import { OpNumberService } from '../op-number.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-operations-panel',
  templateUrl: './operations-panel.component.html',
  styleUrls: ['./operations-panel.component.scss']
})

export class OperationsPanelComponent implements OnInit {
  numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  operands = ['+', '-', 'x', '/'];
  constructor(private calculatorService: OpNumberService) { }

  ngOnInit(): void { }

  catchMyNum(number: number){
    this.calculatorService.catchMyNum(number);
  }

  catchOperation(op: string) {
    this.calculatorService.catchOperation(op)
  }

  showResult() {
    this.calculatorService.showResult();
  }
}
