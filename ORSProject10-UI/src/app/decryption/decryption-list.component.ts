import { Component, OnInit } from '@angular/core';
import { BaseListCtl } from '../base-list.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-decryption-list',
  templateUrl: './decryption-list.component.html',
  styleUrls: ['./decryption-list.component.css']
})
export class DecryptionListComponent extends BaseListCtl {

  constructor(public locator: ServiceLocatorService, public route: ActivatedRoute) {
     super( locator.endpoints.DECRYPTION, locator, route);
   }


}
