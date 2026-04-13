import { Component, OnInit } from '@angular/core';
import { BaseListCtl } from '../base-list.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-certificatetemplate-list',
  templateUrl: './certificatetemplate-list.component.html',
  styleUrls: ['./certificatetemplate-list.component.css']
})
export class CertificatetemplateListComponent extends BaseListCtl{

 constructor(public locator: ServiceLocatorService, public route: ActivatedRoute) {
    super( locator.endpoints.CERTIFICATETEMPLATE, locator, route);
  }

}
