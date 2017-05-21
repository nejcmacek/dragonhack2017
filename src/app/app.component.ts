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
		"Radio Button 2"
	];

	ngOnInit(): void {
		// setTimeout(() => {
		// 	changeColor({
		// 		accent: "#f0be3d",
		// 		black: "rgb(128, 128, 134)"
		// 	});
		// });
	}

}
