import { Component, Inject } from '@angular/core';
import { Http } from '@angular/http';

@Component({
	selector: 'home',
	templateUrl: './home.component.html'
})
export class HomeComponent {
	public mp4Details: MP4Details[];

	constructor(http: Http, @Inject('BASE_URL') baseUrl: string) {
		http.get(baseUrl + 'MP4/GetList').subscribe(result => {
			this.mp4Details = result.json() as MP4Details[];
		}, error => console.error(error));
	}
}

interface MP4Details {
	name: string;
	date: Date;
}
