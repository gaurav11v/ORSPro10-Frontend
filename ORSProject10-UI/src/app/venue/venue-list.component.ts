import { Component, OnInit } from '@angular/core';
import { BaseListCtl } from '../base-list.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-venue-list',
  templateUrl: './venue-list.component.html',
  styleUrls: ['./venue-list.component.css']
})
export class VenueListComponent extends BaseListCtl{

 constructor(public locator: ServiceLocatorService, public route: ActivatedRoute) {
    super( locator.endpoints.VENUE, locator, route);
  }

}
