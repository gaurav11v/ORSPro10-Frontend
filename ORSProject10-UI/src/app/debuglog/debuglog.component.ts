import { Component, OnInit } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-debuglog',
  templateUrl: './debuglog.component.html',
  styleUrls: ['./debuglog.component.css']
})
export class DebuglogComponent extends BaseCtl {

 selected = null;
    constructor(public locator: ServiceLocatorService, public route: ActivatedRoute) {
      super(locator.endpoints.DEBUGLOG, locator, route);
    }
   populateForm(form, data) {
  
    form.id = data.id;
    form.debugCode = data.debugCode;
    form.message = data.message;
    form.logLevel = data.logLevel;
    form.status = data.status;

   }
}
