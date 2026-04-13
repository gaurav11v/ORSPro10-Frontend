import { Component, OnInit } from '@angular/core';
import { BaseListCtl } from '../base-list.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-parking-list',
  templateUrl: './parking-list.component.html',
  styleUrls: ['./parking-list.component.css']
})
export class ParkingListComponent extends BaseListCtl{

 constructor(public locator: ServiceLocatorService, public route: ActivatedRoute) {
    super( locator.endpoints.PARKING, locator, route);
  }

}
