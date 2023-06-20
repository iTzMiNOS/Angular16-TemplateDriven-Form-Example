import { Component } from '@angular/core';
import {FormControl, NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularForm';
  onSubmit(ftmp: NgForm){
    console.log(ftmp.value);

  }
  getValue(f: any){
    console.log(f);

  }
}
