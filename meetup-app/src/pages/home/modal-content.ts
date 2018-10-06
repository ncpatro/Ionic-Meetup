import { Component } from "@angular/core";
import { Platform, NavParams, ViewController } from "ionic-angular";

@Component({
    template: `
  <ion-header>
    <ion-toolbar>
      <ion-title>
        Description
      </ion-title>
      <ion-buttons start>
        <button ion-button (click)="dismiss()">
          <span ion-text color="primary" showWhen="ios">Cancel</span>
          <ion-icon name="md-close" showWhen="android, windows"></ion-icon>
        </button>
      </ion-buttons>
    </ion-toolbar>
  </ion-header>
  <ion-content>
    <ion-list>
        <ion-item>
          <ion-avatar item-start>
            <ion-icon name="{{character.image}}"></ion-icon>
          </ion-avatar>
          <h2>{{character.name}}</h2>
          <p>{{character.quote}}</p>
        </ion-item>
        <ion-item *ngFor="let item of character['items']">
          {{item.title}}
          <ion-note item-end>
            {{item.note}}
          </ion-note>
        </ion-item>
    </ion-list>
  </ion-content>
  `
})
export class ModalContentPage {
    character;

    constructor(
        public platform: Platform,
        public params: NavParams,
        public viewCtrl: ViewController
    ) {
        var characters = [
            {
                name: 'Performance Metrics For Modern Apps',
                quote: 'Speaker: Shubham',
                image: 'logo-nodejs',
                items: [
                    { title: 'Duration', note: '1 hr' },
                    { title: 'Date', note: 'Oct 6th' },
                    { title: 'Location', note: 'BLR' }
                ]
            },
            {
                name: 'Ionic Framework to build cross platform apps',
                quote: 'Speaker: NC Patro',
                image: 'ionic',
                items: [
                    { title: 'Duration', note: '1 hr' },
                    { title: 'Date', note: 'Oct 6th' },
                    { title: 'Location', note: 'BLR' }
                ]
            }
        ];
        this.character = characters[this.params.get('charNum')];
    }

    dismiss() {
        this.viewCtrl.dismiss();
    }
}