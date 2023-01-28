import { Component } from '@angular/core';
import { HistoryRecord } from '../historyRecord';
import { HistoryService } from '../history.service';
import { IonAccordion } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  records: HistoryRecord[] = [];

  constructor(private historyService: HistoryService) {}

    ionViewDidEnter()
    {
      this.records = this.historyService.historyArray;
    }

    clearHistory()
    {
      this.historyService.clearHistory();
      location.reload();
    }

}
