import { Component, Input, OnInit } from '@angular/core';
import { Mission } from '../models/mission';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-missiondetails',
  templateUrl: './missiondetails.component.html',
  styleUrls: ['./missiondetails.component.css'],
})

export class MissiondetailsComponent implements OnInit { 
  mission: object | any;
  // mission$: Observable<Mission>;
  // @Input('details') details: string = "";

  constructor(private route: ActivatedRoute, private router: Router) { 
    this.route.params.subscribe(data => {
      this.mission = data;
      console.log(data);
    })   
   }

  ngOnInit(): void {

    // this.mission$ = JSON.parse(this.route.paramMap.pipe);
  }

}
