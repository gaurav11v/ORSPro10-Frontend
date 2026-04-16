import { Component, OnInit } from '@angular/core';
import { BaseListCtl } from '../base-list.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usage-list',
  templateUrl: './usage-list.component.html',
  styleUrls: ['./usage-list.component.css']
})
export class UsageListComponent extends BaseListCtl {

  constructor(public locator: ServiceLocatorService, public route: ActivatedRoute) {
     super( locator.endpoints.USAGE, locator, route);
   }



}
