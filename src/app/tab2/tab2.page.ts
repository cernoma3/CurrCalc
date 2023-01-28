import { Component } from '@angular/core';
import { ExchangeRateService } from '../exchange-rate.service';
import { HistoryRecord } from '../historyRecord';
import { HistoryService } from '../history.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page 
{
  baseSymbol: string = '';
  targetSymbol: string = '';
  exchangeRate: any;
  amount: number = 0;
  result: number = 0;
  convRate: number = 0; 
  private loading: any;

  constructor(private api: ExchangeRateService, 
              private historyService: HistoryService,
              private loadingCtrl: LoadingController) 
  {}

  ngOnInit() {}

  getRates()
  {
    this.api.getLatestRates(this.baseSymbol).subscribe(data =>
      {
        this.exchangeRate = data['conversion_rates'][this.targetSymbol];
        this.result = this.exchangeRate * this.amount;
        this.convRate = data['conversion_rates'][this.targetSymbol];
        let record = new HistoryRecord(this.baseSymbol, this.targetSymbol, this.amount, this.result); 
        this.historyService.saveHistory(record);
      });
  }
}