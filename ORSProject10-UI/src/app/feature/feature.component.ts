import { Component, OnInit } from '@angular/core';
import { BaseListCtl } from '../base-list.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';
import { BaseCtl } from '../base.component';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.css']
})
export class FeatureComponent extends BaseCtl {

  selected = null;
   constructor(public locator: ServiceLocatorService, public route: ActivatedRoute) {
     super(locator.endpoints.FEATURE, locator, route);
   }
  populateForm(form, data) {
 
    form.id = data.id;
    form.accessCode = data.accessCode;
    form.featureName = data.featureName;
    form.userName = data.userName;
    form.status = data.status

}
}
