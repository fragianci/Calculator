import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { OpNumberService } from './op-number.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'Calculator';
  result = 0;
  resultSub: Subscription

  constructor(private calculatorService: OpNumberService) { }

  ngOnInit(): void {
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
