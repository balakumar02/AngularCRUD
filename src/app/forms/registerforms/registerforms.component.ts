import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-registerforms',
  templateUrl: './registerforms.component.html',
  styleUrls: ['./registerforms.component.css'],
})
export class RegisterformsComponent implements OnInit {
  myform!: FormGroup;
  constructor(private register: RegisterService) {}

  ngOnInit(): void {
    this.myform = new FormGroup({
      userid: new FormControl(''),
      password: new FormControl(),
      dpname: new FormControl(),
      email: new FormControl(),
      phonenumber: new FormControl(),
      age: new FormControl(),
      fname: new FormControl(),
      lname: new FormControl(),
    });
  }
  getData() {
    //  console.log(this.myform.value);
    this.register.insertData(this.myform.value).subscribe((result) => {
      alert('Succesfully submitted');
      this.ngOnInit();
    });
  }
}
