import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
	selector: 'app-hour1400-images',
	templateUrl: './hour1400-images.component.pug',
	styleUrls: ['./hour1400-images.component.scss']
})
export class Hour1400ImagesComponent implements OnInit {

	public hour1400Files: Hour1400File[];

	constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
		http.get<Hour1400File[]>(baseUrl + 'api/Hour1400/GetThumbnailList').subscribe(result => {
			this.hour1400Files = result;
		}, error => console.error(error));
	}

	ngOnInit() {
	}

}

interface Hour1400File {
	fileName: string;
	dateTaken: Date;
}