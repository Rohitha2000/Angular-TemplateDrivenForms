import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TemplateDrivenForm';
  defaultq= 'pet';
  answer;
  genders= ['female', 'male'];
  user={
    username: '',
    email: '',
    secret: '',
    answer: '',
    gender:''
  };
  submitted= false;
  suggestUserName() {
    const suggestedName = 'Superuser';
 /*   this.signupform.setValue({
      userData:{
        username: suggestedName,
        email: ''
      },
      secret: 'pet',
      quesans: '',
      gender: 'female'
    });  */
    this.signupform.form.patchValue({
      userData:{
        username: suggestedName
      }
    });

  }

  @ViewChild('f') signupform:NgForm;

  onSubmit(){
    this.submitted= true;
     this.user.username= this.signupform.value.userData.username;
     this.user.email= this.signupform.value.userData.email;
     this.user.secret= this.signupform.value.secret;
     this.user.answer= this.signupform.value.quesans;
     this.user.gender= this.signupform.value.gender;

     this.signupform.reset();
  }

  // onSubmit(form:NgForm){
  //   console.log("submitted")
  // }


}
