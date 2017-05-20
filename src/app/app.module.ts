import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
<<<<<<< HEAD
import { NavbarComponent } from './navbar/navbar.component';
import { NavitemComponent } from './navitem/navitem.component';
=======
import { ButtonComponent } from './button/button.component';
>>>>>>> master

@NgModule({
	declarations: [
		AppComponent,
<<<<<<< HEAD
		NavbarComponent,
		NavitemComponent
=======
		ButtonComponent
>>>>>>> master
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
