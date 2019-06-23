import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'form-array-example';

  skillsArray: FormArray;
  profileForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {

    this.profileForm = this.formBuilder.group({
      customerName: '',
      email: '',
      skills: this.formBuilder.array([this.createSkill()])
    });

    this.createSkill();
  }

  createSkill(): FormGroup {
    return this.formBuilder.group({
      name: '',
      description: '',
      price: ''
    });
  }

  addSkill() {
    this.skillsArray = this.profileForm.get('skills') as FormArray;
    this.skillsArray.push(this.createSkill());
    console.log(this.skillsArray.length)
    this.profileForm.controls.skills = this.skillsArray;
  }

  getFormArray(): FormArray {
    return <FormArray>this.profileForm.controls.skills;
  }
}
