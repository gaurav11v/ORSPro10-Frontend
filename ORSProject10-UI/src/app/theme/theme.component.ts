import { Component, OnInit } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css']
})
export class ThemeComponent extends BaseCtl {

  selected = null;
   constructor(public locator: ServiceLocatorService, public route: ActivatedRoute) {
     super(locator.endpoints.THEME, locator, route);
   }
  populateForm(form, data) {
 
    form.id = data.id;
    form.themeCode = data.themeCode;
    form.themeName = data.themeName;
    form.color = data.color;
    form.status = data.status

}
}
