import { Component, OnInit } from '@angular/core';
import { BaseListCtl } from '../base-list.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-certificate-list',
  templateUrl: './certificate-list.component.html',
  styleUrls: ['./certificate-list.component.css']
})
export class CertificateListComponent extends BaseListCtl {

 constructor(public locator: ServiceLocatorService, public route: ActivatedRoute) {
    super( locator.endpoints.CERTIFICATE, locator, route);
  }

}
