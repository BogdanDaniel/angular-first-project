import { Component, OnInit } from '@angular/core';
import { PEOPLES } from '../mocks-peoples';
import { People } from '../people';

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

  constructor() { }

  ngOnInit() {
  }

  //one people
  selectedPeople: People;

  onSelect(people: People){
    this.selectedPeople = people;
    console.log(this.selectedPeople);
  }

  //all the people
  peoples = PEOPLES;

  

}
