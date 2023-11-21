import { Component } from '@angular/core';
import{FormGroup,FormControl, Validators} from '@angular/forms'
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  togglebuttonbool2:Boolean=false;
  signInform=new FormGroup(
    {
      user:new FormControl('',[Validators.required,Validators.email]),
      password:new FormControl('',[Validators.required,Validators.minLength(5)])
    }
  )
  logindata()
  {
    console.warn(this.signInform.value)
  }
  getuser()
  {
    return this.signInform.get('user')
  }
}
