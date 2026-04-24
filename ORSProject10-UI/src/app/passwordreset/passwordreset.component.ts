import { Component, OnInit } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-passwordreset',
  templateUrl: './passwordreset.component.html',
  styleUrls: ['./passwordreset.component.css']
})
export class PasswordresetComponent extends BaseCtl {

  selected = null;
   constructor(public locator: ServiceLocatorService, public route: ActivatedRoute) {
     super(locator.endpoints.PASSWORDRESET, locator, route);
   }
  populateForm(form, data) {
 
    form.id = data.id;
    form.resetCode = data.resetCode;
    form.userName = data.userName;
    form.resetToken = data.resetToken;
    form.status = data.status

}

}
