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
  numberPressed = false;
  opNumbers: opNumber[] = [];

  constructor(private calculatorService: OpNumberService) { }

  ngOnInit(): void { }

  //Non prende i numeri con più cifre
  catchMyNum(number: number){
    this.myNumber = number;
    this.numberPressed = true;
  }

  catchOperation(op: string) {
    if(this.numberPressed){
      let num: number = this.myNumber;
      let operationNumber = {num, op};
      this.opNumbers.push(operationNumber);
      console.log(this.opNumbers);
    }
    if (this.opNumbers.length === 1) {
      this.result = this.opNumbers[0].num;
    }
    if(!this.numberPressed && op == '='){
      this.opNumbers[length-1].op = '=';
    }
    for (let opnum of this.opNumbers) {
      if(opnum.op === "="){
        this.showResult();
      }
    }
    this.numberPressed = false;
  }

  showResult() {
    let i = 0;
    for (let opnum of this.opNumbers) {
      switch (opnum.op){
        case '+':
          this.result += this.opNumbers[i+1].num;
          i++;
          break;
        case '-':
          this.result -= this.opNumbers[i+1].num;
          i++;
          break;
        case 'x':
          this.result *= this.opNumbers[i+1].num;
          i++;
          break;
        case '/':
          this.result /= this.opNumbers[i+1].num;
          i++;
          break;
      }
    }
    console.log("Result: " + this.result);
  }

}
