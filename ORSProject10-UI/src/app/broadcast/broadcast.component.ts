import { Component, OnInit } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-broadcast',
  templateUrl: './broadcast.component.html',
  styleUrls: ['./broadcast.component.css']
})
export class BroadcastComponent extends BaseCtl {

  selected = null;
   constructor(public locator: ServiceLocatorService, public route: ActivatedRoute) {
     super(locator.endpoints.BROADCAST, locator, route);
   }
  populateForm(form, data) {
 
    form.id = data.id;
    form.broadcastCode = data.broadcastCode;
    form.message = data.message;
    form.sentBy = data.sentBy;
    form.status = data.status

}

}
