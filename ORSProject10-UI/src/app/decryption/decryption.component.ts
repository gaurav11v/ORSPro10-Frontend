import { Component, OnInit } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-decryption',
  templateUrl: './decryption.component.html',
  styleUrls: ['./decryption.component.css']
})
export class DecryptionComponent extends BaseCtl {

  selected = null;
   constructor(public locator: ServiceLocatorService, public route: ActivatedRoute) {
     super(locator.endpoints.DECRYPTION, locator, route);
   }
  populateForm(form, data) {
 
    form.id = data.id;
    form.decryptionCode = data.decryptionCode;
    form.algorithm = data.algorithm;
    form.keyUsed = data.keyUsed;
    form.status = data.status

}
}
