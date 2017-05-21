import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavitemComponent } from './navitem/navitem.component';
import { ButtonComponent } from './button/button.component';
import { SelectComponent } from './select/select.component';
import { OptionComponent } from './option/option.component';

@NgModule({
	declarations: [
		AppComponent,
		NavbarComponent,
		NavitemComponent,
		ButtonComponent,
		SelectComponent,
		OptionComponent
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
