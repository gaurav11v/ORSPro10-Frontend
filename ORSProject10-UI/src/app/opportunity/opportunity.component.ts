import { Component, OnInit } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-opportunity',
  templateUrl: './opportunity.component.html',
  styleUrls: ['./opportunity.component.css']
})
export class OpportunityComponent extends BaseCtl {

  selected = null;
   constructor(public locator: ServiceLocatorService, public route: ActivatedRoute) {
     super(locator.endpoints.OPPORTUNITY, locator, route);
   }
  populateForm(form, data) {
 
    form.id = data.id;
    form.opportunityCode = data.opportunityCode;
    form.clientName = data.clientName;
    form.amount = data.amount;
    form.status = data.status

}
}