import { Component, OnInit } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usage',
  templateUrl: './usage.component.html',
  styleUrls: ['./usage.component.css']
})
export class UsageComponent extends BaseCtl {

  selected = null;
   constructor(public locator: ServiceLocatorService, public route: ActivatedRoute) {
     super(locator.endpoints.USAGE, locator, route);
   }
  populateForm(form, data) {
 
    form.id = data.id;
    form.usageCode = data.usageCode;
    form.userName = data.userName;
    form.usageType = data.usageType;
    form.status = data.status

}
}
