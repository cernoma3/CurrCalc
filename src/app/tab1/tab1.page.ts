import { Component } from '@angular/core';
import { ExchangeRateService } from '../exchange-rate.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page{
  baseSymbol: string = 'USD';
  exchangeRate: any;
  private loading: any;

  constructor(private api: ExchangeRateService, private loadingCtrl: LoadingController) {}

  getRates()
  {
    this.showLoading();
    this.api.getLatestRates(this.baseSymbol).subscribe(data =>
      {
        this.exchangeRate = data['conversion_rates'];
        this.loading.dismiss();
      });
    
  }

  async showLoading()
  {
    this.loading = await this.loadingCtrl.create({
      message: 'Getting actual rates...',
    });

    this.loading.present();
  }

}