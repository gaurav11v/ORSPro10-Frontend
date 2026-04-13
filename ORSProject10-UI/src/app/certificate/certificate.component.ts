import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceLocatorService } from '../service-locator.service';
import { BaseCtl } from '../base.component';

@Component({
  selector: 'app-certificate',
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.component.css']
})
export class CertificateComponent extends BaseCtl {

  selected = null;
   constructor(public locator: ServiceLocatorService, public route: ActivatedRoute) {
     super(locator.endpoints.CERTIFICATE, locator, route);
   }
  populateForm(form, data) {
 
    form.id = data.id;
    form.certificateNumber = data.certificateNumber;
    form.issuedTo = data.issuedTo;
    form.issueDate = data.issueDate;
    form.certificateStatus = data.certificateStatus
    
  }
   
      parseDate(dateString: string): Date {
        if (dateString) {
          return new Date(dateString);
          console.log(dateString)
        }
        return null;
      }
   

}
