import { Component } from '@angular/core';
import { ApiDataService } from '../api-data.service';
import { LoadingController } from '@ionic/angular';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public apiData: any;
  private loading: any;
  public dataItems: any;
  public storedData: any;

  constructor(
    public api: ApiDataService,
    private loadingCtrl: LoadingController,
    private router: Router
  ) {}
  search() {
    this.loadingCtrl.create({ message: 'Please Wait...!' }).then((overlay) => {
      this.loading = overlay;
      this.loading.present();
    });
    setTimeout(() => {
      this.loading.dismiss();
    }, 3000);
    this.api.apiData(this.dataItems).subscribe((result) => {
      console.log(result);
      this.storedData = result['articles'];
    });
  }

  singlePage(item) {
    this.loadingCtrl.create({ message: 'Please Wait...!' }).then((overlay) => {
      this.loading = overlay;
      this.loading.present();
    });
    setTimeout(() => {
      this.loading.dismiss();
      this.router.navigate(['/single'], objToSend);
    }, 2000);
    let objToSend: NavigationExtras = {
      state: { stored: item },
    };
  }
}
