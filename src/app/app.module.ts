import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AgendaComponent } from './agenda/agenda.component';

//Angular Input, Formular
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here


//Angular Material
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import {MatChipsModule} from '@angular/material/chips';
import { PeopleDetailsComponent } from './people-details/people-details.component';


@NgModule({
  declarations: [
    AppComponent,
    AgendaComponent,
    PeopleDetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule,
    MatGridListModule,
    MatListModule,
    MatIconModule,
    MatChipsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
