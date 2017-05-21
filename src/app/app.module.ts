import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavitemComponent } from './navitem/navitem.component';
import { ButtonComponent } from './button/button.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { RadiosetComponent } from './radioset/radioset.component';
import { TabsComponent } from './tabs/tabs.component';
import { TabComponent } from './tab/tab.component';
import { InputComponent } from './input/input.component';
import { ThumbnailComponent } from './thumbnail/thumbnail.component';
import { SelectComponent } from './select/select.component';
import { OptionComponent } from './option/option.component';
import { FooterComponent } from './footer/footer.component';
import { TableComponent } from './table/table.component';

@NgModule({
	declarations: [
		AppComponent,
		ListComponent
		CheckboxComponent,
		NavbarComponent,
		NavitemComponent,
		ButtonComponent,
		RadiosetComponent,
		InputComponent,
		ThumbnailComponent,
    TabsComponent,
		TabComponent,
		InputComponent,
		SelectComponent,
		OptionComponent,
		FooterComponent,
		TableComponent
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
