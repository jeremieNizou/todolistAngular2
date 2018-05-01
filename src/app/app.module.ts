import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { TodosComponent } from './todos/todos.component';
import { TodoComponent } from './todo/todo.component';
import { TodosService }          from './services/todos.service';

@NgModule({
	imports: [ 
			BrowserModule, 
			FormsModule,
			AppRoutingModule,
			HttpModule
	],
	declarations: [
		AppComponent,
		AccueilComponent,
		TodosComponent,
		TodoComponent
	],
	providers: [ TodosService ],
	bootstrap: [ AppComponent ]
})
export class AppModule { }
