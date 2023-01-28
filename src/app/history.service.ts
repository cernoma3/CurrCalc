import { Injectable } from '@angular/core';
import { HistoryRecord } from './historyRecord';
import { Preferences } from '@capacitor/preferences';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  historyArray: HistoryRecord[] = []

  constructor() 
  {
    this.loadState();
  }

  async saveHistory(record: HistoryRecord)
  {
    console.log(record);
    this.historyArray.unshift(record);
    await Preferences.set({
      key: 'history',
      value: JSON.stringify(this.historyArray),
    });
  }

  async loadState()
  {
    const { value } = await Preferences.get({ key: 'history' });
    if(value)
    {
      this.historyArray = JSON.parse(value);
    }
  }

  async clearHistory() 
  {
      await Preferences.remove({ key: 'history' });
      this.historyArray = [];
      this.historyArray.length = 0;
  }
}
