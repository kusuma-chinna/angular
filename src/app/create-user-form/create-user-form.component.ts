import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-user-form',
  templateUrl: './create-user-form.component.html',
  styleUrls: ['./create-user-form.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule]
})
export class CreateUserFormComponent implements OnInit {
  userForm: FormGroup;
  activityList = ['Activity 1', 'Activity 2', 'Activity 3'];
  selectedActivities: string[] = [];
  statusLabel: string;

  

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.userForm = this.fb.group({
      username: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: [''],
      contact: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      category: ['', Validators.required],
      activities: [['']],
      roles: ['', Validators.required], // Ensure the form control is defined
      plant: ['', Validators.required],
      division: ['', Validators.required],
      status: [false],
    });
  }

  selectActivities(): void {
    this.userForm.get('activities')?.setValue(this.selectedActivities);
    console.log('Selected Activities:', this.selectedActivities);
  }

  onClose() {
    alert('Close button clicked');
  }

  onCreate() {
    alert('Create button clicked');
  }

  onSubmit() {
    if (this.userForm.valid) {
      console.log(this.userForm.value);
    } else {
      console.log('Form is invalid');
    }
  }

  onStatusChange(event: any) {
    if (event.target.checked) {
      this.statusLabel = 'Active';
    } else {
      this.statusLabel = 'Inactive';
    }
  }
}
