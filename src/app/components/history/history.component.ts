import { Component, OnInit } from '@angular/core';
import {HistoryService} from "../../services/history.service";
import {HistoryRecord} from "../../model";

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  history: HistoryRecord[] = []

  constructor(private historyService: HistoryService) {
    this.history = this.historyService.getHistory();
  }

  ngOnInit(): void {
  }



}
