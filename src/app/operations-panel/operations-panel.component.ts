import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operations-panel',
  templateUrl: './operations-panel.component.html',
  styleUrls: ['./operations-panel.component.scss']
})
export class OperationsPanelComponent implements OnInit {
  numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  constructor() { }

  ngOnInit(): void {
  }

}
