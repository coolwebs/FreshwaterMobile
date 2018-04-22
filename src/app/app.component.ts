import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';

import { Events } from 'ionic-angular';
import { FilterWrapper } from '../filter.module';

@Component({
	templateUrl: 'app.html'
})



export class MyApp {
	size: any = "";
	shell: any = "";
	legs: any = "";
	tail: any = "";
	sensitive: any = "";

	rootPage: any = TabsPage;
	filterWrapper: FilterWrapper;
	constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public events: Events) {
		this.filterWrapper = new FilterWrapper();
		platform.ready().then(() => {
			statusBar.styleDefault();
			splashScreen.hide();
		});
	}

	applyFilter() {
		this.events.publish('filters:changed', this.filterWrapper);
    }

	resetFilter(){
		this.filterWrapper = new FilterWrapper();
		this.events.publish('filters:changed', this.filterWrapper);
	}

}
