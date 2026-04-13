import { Component, OnInit } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-certificatetemplate',
  templateUrl: './certificatetemplate.component.html',
  styleUrls: ['./certificatetemplate.component.css']
})
export class CertificatetemplateComponent extends BaseCtl {

  selected = null;
   constructor(public locator: ServiceLocatorService, public route: ActivatedRoute) {
     super(locator.endpoints.CERTIFICATETEMPLATE, locator, route);
   }
  populateForm(form, data) {
 
    form.id = data.id;
    form.templateName = data.templateName;
    form.format = data.format;
    form.createdDate = data.createdDate;
    
    
  }
   
      parseDate(dateString: string): Date {
        if (dateString) {
          return new Date(dateString);
          console.log(dateString)
        }
        return null;
      }
   

}

