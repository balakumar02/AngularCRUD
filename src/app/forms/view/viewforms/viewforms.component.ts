import { Component, OnInit, Pipe } from '@angular/core';
import { RegisterService } from '../../register.service';
import { View } from './view';

@Component({
  selector: 'app-viewforms',
  templateUrl: './viewforms.component.html',
  styleUrls: ['./viewforms.component.css'],
})
export class ViewformsComponent implements OnInit {
  search!: string;
  viewdata: View[] = [];
  constructor(private register: RegisterService) {}

  ngOnInit(): void {
    this.register
      .viewData()
      .subscribe({ next: (result) => (this.viewdata = result) });
  }
  //Delete record
  deleteData(id: number) {
    this.register.deleteIdData(id).subscribe((result) => {});
    alert('Are you sure? You want to delete');
    this.ngOnInit();
  }
}
