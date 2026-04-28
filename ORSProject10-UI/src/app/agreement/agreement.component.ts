import { Component, OnInit } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-agreement',
  templateUrl: './agreement.component.html',
  styleUrls: ['./agreement.component.css']
})
export class AgreementComponent extends BaseCtl {

  selected = null;
   constructor(public locator: ServiceLocatorService, public route: ActivatedRoute) {
     super(locator.endpoints.AGREEMENT, locator, route);
   }
  populateForm(form, data) {
 
    form.id = data.id;
    form.partyName = data.partyName;
    form.signedDate = data.signedDate;
    form.terms = data.terms;
    

}
}
