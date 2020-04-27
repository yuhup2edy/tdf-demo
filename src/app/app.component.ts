import { Component } from '@angular/core';
import { Rar } from './rar';
import { getLocaleDateFormat } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tdf-demo';
  approverHasError = true;
  dateHasError = true;
  
  approvers= ['Maryanne Frake','Abhijit Mukherjee','Vrushali Dixit','Shane Kushin'];
  types = ['TFS Admin','TFS Reader','TFS Contributor','TFS Build Admin','TFS Branch Delete','TFS Remove Access','Others'];
  applications = ['iClosings','IT Portal','Vendor Management','Settlement Advantage.com','HomeBase','Homebase+','Async/MsgBus',
                  'Title!Snap','TRUE','CORE','RPA','CORE Connect','$AFE','Others','Go2Agent','Sitefinity','Fast Tool','RPA Forms'];
  
  mydate = new Date('05/01/2020');
  //console.log(mydate.substring(1,3));
  //d1 = new Date('01/01/0001').getMonth ;
  //d2 = new Date().getDay;

  //d1 = new Date();
  //this.mydate = this.datePipe.transform(this.mydate, 'yyyy-MM-dd');
  
  rarModel = new Rar('','TFS','TFS Contributor',this.mydate,1234567890,'$AFE','Main','1.0','KumarPav,ShrivySh','default','Provide Access');


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

  /* validateNeedBy(value)
  {
   
    
    if (this.d1 - this.d2 < 2)
    {
      this.dateHasError = true;
    } 
    else
    {
      this.dateHasError = false;
    }
  } */

  onSubmit()
  {
    console.log(this.rarModel);
    //to log to console use the class constructor instance
  }
}