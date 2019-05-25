import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent implements OnInit {

    profileForm    =  new FormGroup({
          FirstName      :  new FormControl(''),
          LastName       :  new FormControl(''),
          Email          :  new FormControl(''),
          Gender         :  new FormControl(''),
          DateOfBirth    :  new FormControl(''),
          Address        :  new FormControl(''),
          City           :  new FormControl(''),
          State          :  new FormControl(''),
          PostCode       :  new FormControl(''),
          MobileNumber   :  new FormControl('')
  });


  constructor() { }
  ngOnInit() {
  }
  onSubmit() {
      console.log(this.profileForm.status);
  }

}
