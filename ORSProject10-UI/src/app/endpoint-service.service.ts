import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class EndpointServiceService {

  constructor() { }

  public SERVER_URL = "http://localhost:8084";
  public MESSAGE = this.SERVER_URL + "/Message";
  public USER = this.SERVER_URL + "/User";
  public ROLE = this.SERVER_URL + "/Role";
  public COLLEGE = this.SERVER_URL + "/College";
  public MARKSHEET = this.SERVER_URL + "/Marksheet";
  public STUDENT = this.SERVER_URL + "/Student";
  public SUBJECT = this.SERVER_URL + "/Subject";
  public FACULTY = this.SERVER_URL + "/Faculty";
  public COURSE = this.SERVER_URL + "/Course";
  public TIMETABLE = this.SERVER_URL + "/TimeTable";
  public JASPERREPORT = this.SERVER_URL + "/Jasper";

  public CUSTOMER = this.SERVER_URL + "/Customer";
  public EMPLOYEE = this.SERVER_URL + "/Employee";
  public CERTIFICATE = this.SERVER_URL + "/Certificate";
  public CERTIFICATETEMPLATE = this.SERVER_URL + "/CertificateTemplate";
  public JOB = this.SERVER_URL + "/Job";
  public PARKING = this.SERVER_URL + "/Parking";
  public OPPORTUNITY = this.SERVER_URL + "/Opportunity";
  public VENUE = this.SERVER_URL + "/Venue";
  public THEME = this.SERVER_URL + "/Theme";
  public DEBUGLOG = this.SERVER_URL + "/DebugLog";
  public DECRYPTION = this.SERVER_URL + "/Decryption";
  public USAGE = this.SERVER_URL + "/Usage";
  public POLICY = this.SERVER_URL + "/Policy";
  public FEATURE = this.SERVER_URL + "/Feature";
  public PASSWORDRESET = this.SERVER_URL + "/PasswordReset";
}
