import { Component } from '@angular/core';
import { Rar } from './rar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tdf-demo';
  approvers= ['Maryanne Frake','Abhijit Mukherjee','Vrushali Dixit','Shane Kushin'];
  types = ['TFS Admin','TFS Reader','TFS Contributor','TFS Build Admin','TFS Branch Delete','TFS Remove Access','Others'];
  applications = ['iClosings','IT Portal','Vendor Management','Settlement Advantage.com','HomeBase','Homebase+','Async/MsgBus',
                  'Title!Snap','TRUE','CORE','RPA','CORE Connect','$AFE','Others','Go2Agent','Sitefinity','Fast Tool','RPA Forms'];
  
  mydate = new Date('05/01/2020');
  rarModel = new Rar('','TFS','TFS Contributor',this.mydate,1234567890,'$AFE','Main','1.0','KumarPav,ShrivySh','Maryanne Frake','Provide Access');
}
