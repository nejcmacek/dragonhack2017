import { OnInit } from '@angular/core/core';
import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	options = [
		"Radio Button 1",
		"Radio Button 2",
		"Radio Button 3"
	];
	selection = [
		"Option 1",
		"Option 2",
		"Option 3"
	];

	ngOnInit(): void {
	}

}
