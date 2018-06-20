import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
	selector: 'app-hour1400-images',
	templateUrl: './hour1400-images.component.pug',
	styleUrls: ['./hour1400-images.component.scss']
})
export class Hour1400ImagesComponent implements OnInit {
	private baseUrl: string;
	public hour1400Files: Hour1400File[];

	constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
		this.baseUrl = baseUrl;

		http.get<Hour1400File[]>(this.baseUrl + 'api/Hour1400/GetThumbnailList').subscribe(result => {
			this.hour1400Files = result;
		}, error => console.error(error));
	}

	ngOnInit() {
	}

	getImagePath(hour1400File: Hour1400File) {
		return `${this.baseUrl}api/Hour1400/GetImage?fileName=${hour1400File.fileName}`;
	}
}

interface Hour1400File {
	fileName: string;
	dateTaken: Date;
}