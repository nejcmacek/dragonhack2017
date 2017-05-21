import { OnInit } from '@angular/core/core';
import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	sel = 0;
	options = [
		"One year",
		"Two years",
		"Three years"
	];
	selection = [
		"Mentor",
		"Student",
		"Sponsor"
	];

	ngOnInit(): void {
	}

}
