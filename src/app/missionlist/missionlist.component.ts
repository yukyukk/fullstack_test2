import { Component, OnInit } from '@angular/core';
import { SpacexapiService } from '../network/spacexapi.service';
import { Subject } from 'rxjs';
import { Mission } from '../models/mission';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})


export class MissionlistComponent implements OnInit {

  missionList = [];
  destroy$: Subject<boolean> = new Subject<boolean>();
  showDiv = false;
  details = "";
  mis: Mission | any;

  constructor(private dataService: SpacexapiService, 
              private route: ActivatedRoute, 
              private router: Router) { }

  ngOnInit(): void {
    this.dataService.sendGetRequest()
      .subscribe((res: any) => {
        console.log(res);
        this.missionList = res;
      })
  }
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  showDetails() {
    this.showDiv = !this.showDiv;
  }

  setDetails(details: string) {
    this.details = details;
    console.log(this.details);
  }

  gotoMissionDetails(mission: any) {
    this.mis = new Mission(mission);
    console.log(this.mis);
    this.router.navigate([ '/details', this.mis ]);
  }

}

