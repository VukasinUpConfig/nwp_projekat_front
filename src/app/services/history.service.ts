import { Injectable } from '@angular/core';
import {HistoryRecord} from "../model";

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  private history: HistoryRecord[]

  constructor() {
    this.history = [];
  }

  getHistory(): HistoryRecord[] {
    return this.history;
  }

  addRecord(record: HistoryRecord): void {
    this.history.push(record);
  }
}
