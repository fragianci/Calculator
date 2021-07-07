import { OnInit, Component } from '@angular/core';
import { OpNumberService } from './op-number.service';

interface opNumber {
  num: number;
  op: string;
}

@Component({
  selector: 'app-operations-panel',
  templateUrl: './operations-panel.component.html',
  styleUrls: ['./operations-panel.component.scss']
})

export class OperationsPanelComponent implements OnInit {
  numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  operands = ['+', '-', 'x', '/'];
  result = 0;
  myNumber = 0;
  opNumbers: opNumber[] = [];

  constructor(private calculatorService: OpNumberService) { }

  ngOnInit(): void {
  }

  catchMyNum(number: number){
    this.myNumber = number
  }

  catchOperator(op: string){
    let num: number = this.myNumber;
    let operationNumber = {num, op};
    this.opNumbers.push(operationNumber);
    console.log(this.opNumbers);
    for(let opnum of this.opNumbers){
      if(opnum.op === "="){
        this.showResult();
      }
    }
  }

  showResult(){
    if(this.opNumbers.length > 0){
      for(let opnum of this.opNumbers){
        let i = 0;
        switch (opnum.op){
          case '+':
            this.result = (opnum.num + this.opNumbers[i+1].num);
            i++;
            break;
          case '-':
            this.result = (opnum.num - this.opNumbers[i+1].num);
            i++;
            break;
          case 'x':
            this.result = (opnum.num * this.opNumbers[i+1].num);
            i++;
            break;
          case '/':
            this.result = (opnum.num / this.opNumbers[i+1].num);
            i++;
            break;
        }
      }
    }
    console.log("R: " + this.result);
  }

}
