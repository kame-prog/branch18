import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
togglebuttonbool:Boolean=false;
constructor()
{
  console.log("toggle value is "+this.togglebuttonbool);
}

ngDoCheck() {
  console.log("toggle value is "+this.togglebuttonbool);
}
checkToggle()
{
  
   if(this.togglebuttonbool===false)
   {
    this.togglebuttonbool==true;
    console.log(this.togglebuttonbool+ "is toggle values");
   }
   else
   {
    this.togglebuttonbool==false;
    console.log(this.togglebuttonbool+ "is toggle values");
   }
}


}
