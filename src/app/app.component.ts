import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm,FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import{FormsModule} from '@angular/forms'
import { mainData } from './data.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  constructor() {

  }
  AllData:mainData[]=[]
  submitForm:any;
  
  @ViewChild('f', { read: NgForm }) form!: NgForm;
  fname="";
  lname="";
  email="";
  age="";
  place="";
  mobile="";
 
  ngOnInit(): void {
    this.submitForm = new FormGroup({
    "Fname" : new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z]*')]),
    "Lname" : new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z]*')]),
    "mail" : new FormControl(null,[Validators.required,Validators.email]),
    "age_" : new FormControl(null,[Validators.required,Validators.pattern('[0-9]*')]),
    "place_" : new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z]*')]),
    "mob_" : new FormControl(null,[Validators.required,Validators.pattern('[0-9]*')])
    
  });
  }
  OnSubmit()
  {
    console.log(this.submitForm.value);
    alert("Thank You for Registration");
    this.AllData.push(new mainData(this.fname,this.lname,this.email,this.age,this.place,this.mobile))
    if(this.submitForm.valid)
    {
      this.submitForm.reset();
    }
  }  
  get Fname() {return this.submitForm.get('Fname');}
  get Lname() {return this.submitForm.get('Lname');}
  get mail() {return this.submitForm.get('mail');}
  get age_() {return this.submitForm.get('age_');}
  get place_() {return this.submitForm.get('place_');}
  get mob_() {return this.submitForm.get('mob_');}
  

  
}
