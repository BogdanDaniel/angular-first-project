import { Component, OnInit, Input } from '@angular/core';
import { People } from '../people';

@Component({
  selector: 'app-people-details',
  templateUrl: './people-details.component.html',
  styleUrls: ['./people-details.component.css']
})
export class PeopleDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() people: People;

}
