import { Component, OnInit } from '@angular/core';
import { BaseListCtl } from '../base-list.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-passwordreset-list',
  templateUrl: './passwordreset-list.component.html',
  styleUrls: ['./passwordreset-list.component.css']
})
export class PasswordresetListComponent extends BaseListCtl {

  constructor(public locator: ServiceLocatorService, public route: ActivatedRoute) {
     super( locator.endpoints.PASSWORDRESET, locator, route);
   }


}
