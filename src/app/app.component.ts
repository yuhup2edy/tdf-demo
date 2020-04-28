import { Component } from '@angular/core';
import { Rar } from './rar';
import { getLocaleDateFormat } from '@angular/common';
import { RarserviceService } from './rarservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tdf-demo';
  approverHasError = true;
  dateHasError = true;
  dateInPast = true;
  submittedForm = false;

  constructor(private _rarService : RarserviceService){}
  
  approvers= ['Maryanne Frake','Abhijit Mukherjee','Vrushali Dixit','Shane Kushin'];
  types = ['TFS Admin','TFS Reader','TFS Contributor','TFS Build Admin','TFS Branch Delete','TFS Remove Access','Others'];
  applications = ['iClosings','KLO Group','IT Portal','Vendor Management','Settlement Advantage.com','HomeBase','Homebase+','Async/MsgBus',
                  'Title!Snap','TRUE','CORE','RPA','CORE Connect','$AFE','Others','Go2Agent','Sitefinity','Fast Tool','RPA Forms'];
  
  //mymonth = new Date().getMonth;
  //mydate = new Date().getDate;
  //myyear = new Date().getFullYear;

  mydate =new Date();

  //console.log(mydate.substring(1,3));
  //d1 = new Date('01/01/0001').getMonth ;
  //d2 = new Date().getDay;

  //d1 = new Date();
  //this.mydate = this.datePipe.transform(this.mydate, 'yyyy-MM-dd');
  
  

  rarModel = new Rar('venkatS','TFS','TFS Contributor',this.mydate,1234567890,'$AFE','Main','1.0','KumarPav,ShrivySh','default','Provide Access');

  
  validateApprover(value)
  {
    if (value === 'default')
    {
      this.approverHasError = true;
    }
    else
    {
      this.approverHasError = false;
    }
  }

  validateNeedBy(value)
  {
    let currentDate = new Date();
    let needByDate  = new Date(value);
    
    //var diff = Math.abs(needByDate.valueOf() - currentDate.valueOf());
    var diff = Math.round(needByDate.valueOf() - currentDate.valueOf());
    var diffDays = Math.ceil(diff / (1000 * 3600 * 24)); 
    //console.log(diffDays);

    diffDays < 2  ? this.dateHasError = true : this.dateHasError = false;

    diffDays < 0 ? this.dateInPast = true : this.dateInPast = false;
    
  }

  onSubmit()
  {
    this.submittedForm = true;
   // console.log(this.rarModel);
    //to log to console use the class constructor instance
    this._rarService.submitRar(this.rarModel)
        .subscribe(
          data => console.log('Success !!', data),
          error => console.log('Error !', error)
        );
  //console.log(data.message);      
  }
}