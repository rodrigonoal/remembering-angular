import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-exercise-one',
  template: `
    <form [formGroup]="myForm" (ngSubmit)="onSubmit()">
      <label for="email">E-mail</label>
      <br>
      <input name="email" type="text" formControlName="email">
      <br>
      <label for="password">Password</label>
      <br>
      <input name="password" type="password" formControlName="password">
      <br>
      <button type="submit" [disabled]="!myForm.valid">Submit</button>
    </form>
  `,
  styles: [
    `form{
      width: 100%;
      margin: 200px 500px 0 500px;
    }`
  ]
})
export class ExerciseOneComponent implements OnInit {
  myForm!: FormGroup;
  constructor() { }

  onSubmit() {
    console.log(this.myForm.value);
  }

  ngOnInit(): void {
    this.myForm = new FormGroup(
      {
        email: new FormControl("", [
          Validators.required,
          Validators.email
        ]),
        password: new FormControl("", [
          Validators.required
        ]),
      }
    )
  }

}
