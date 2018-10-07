import { Component, OnInit } from '@angular/core';
import { PEOPLES } from '../mocks-peoples';
import { People } from '../people';
import {HttpClient} from '@angular/common/http';
import {AgendaService} from './agenda.service';

export interface Section {
  name: string;
  updated: Date;
}

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})



export class AgendaComponent implements OnInit {

  peoples: any;

  constructor(private agendaService: AgendaService) { }

  ngOnInit() {
  this.agendaService.getPeoples().subscribe(result => {
    this.peoples = result.peoples;
    console.log(this.peoples, 'This are peoples from agenda');
  });
  }

  //one people
  selectedPeople: People;

  onSelect(people: People){
    this.selectedPeople = people;
    console.log(this.selectedPeople);
  }

  //all the people
//  peoples = PEOPLES;

  

}
