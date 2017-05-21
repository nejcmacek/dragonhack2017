import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavitemComponent } from './navitem/navitem.component';
import { ButtonComponent } from './button/button.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { RadiosetComponent } from './radioset/radioset.component';
import { InputComponent } from './input/input.component';
import { ThumbnailComponent } from './thumbnail/thumbnail.component';

@NgModule({
	declarations: [
		AppComponent,
		CheckboxComponent,
		NavbarComponent,
		NavitemComponent,
		ButtonComponent,
		RadiosetComponent,
		InputComponent,
		ThumbnailComponent
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
