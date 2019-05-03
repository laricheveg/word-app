import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../services/auth.service';

import { UserWordFrequencyService } from '../../services/user-word-frequency.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent implements OnInit {

  stringForm: FormGroup;

  string = new FormControl('', [Validators.required]);

  wordFrequency = [];

  constructor(
    private authService: AuthService,
    private wordFrequencyService: UserWordFrequencyService,
    private formBuilder: FormBuilder,
  ) {

  }

  ngOnInit() {
    this.stringForm = this.formBuilder.group({
      string: this.string,
    });

    this.getFrequency();
  }

  submitString() {
    var data = {
      string: this.stringForm.get("string").value
    }

    this.wordFrequencyService.updateFrequency(data).subscribe(data => {
      this.wordFrequency = data;
    })
  }

  deleteAll() {
    this.wordFrequencyService.removeAllFrequency().subscribe(data => {
      this.getFrequency();

    })
    
  }

  getFrequency() {
    this.wordFrequencyService.getFrequency(this.authService.currentUser.id).subscribe(data => {
      this.wordFrequency = data;
    })
  }

}
