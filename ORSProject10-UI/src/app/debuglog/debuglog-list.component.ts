import { Component, OnInit } from '@angular/core';
import { BaseListCtl } from '../base-list.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-debuglog-list',
  templateUrl: './debuglog-list.component.html',
  styleUrls: ['./debuglog-list.component.css']
})
export class DebuglogListComponent extends BaseListCtl {

 constructor(public locator: ServiceLocatorService, public route: ActivatedRoute) {
    super( locator.endpoints.DEBUGLOG, locator, route);
  }

}
