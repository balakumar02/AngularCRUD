import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';
import { View } from '../view/viewforms/view';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
})
export class UpdateComponent implements OnInit {
  updateform = new FormGroup({
    userid: new FormControl('bala'),
    password: new FormControl(),
    dpname: new FormControl(),
    email: new FormControl(),
    phonenumber: new FormControl(),
    age: new FormControl(),
    fname: new FormControl(),
    lname: new FormControl(),
  });
  constructor(
    private register: RegisterService,
    private router: ActivatedRoute,
    private route: Router
  ) {}

  ngOnInit(): void {
    console.log(this.router.snapshot.params['id']);
    this.register
      .getIdData(this.router.snapshot.params['id'])
      .subscribe((result: any) => {
        this.updateform = new FormGroup({
          userid: new FormControl(result['userid']),
          password: new FormControl(result['password']),
          dpname: new FormControl(result['dpname']),
          email: new FormControl(result['email']),
          phonenumber: new FormControl(result['phonenumber']),
          age: new FormControl(result['userid']),
          fname: new FormControl(result['fname']),
          lname: new FormControl(result['lname']),
        });
      });
  }

  updateData(data: any) {
    this.register
      .updateIdData(this.router.snapshot.params['id'], data.value)
      .subscribe((result: any) => {});
    alert('updated successfully');
    this.route.navigate(['/view']);
  }
}
