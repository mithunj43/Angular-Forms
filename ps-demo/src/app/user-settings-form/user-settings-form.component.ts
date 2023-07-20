import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Observable } from 'rxjs';
import { DataService } from '../data/data.service';
import { UserSettings } from '../data/user-settings';

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css']
})
export class UserSettingsFormComponent implements OnInit{

  constructor(private dataService: DataService){}


  orginialUserSettings: UserSettings = {
    name: null,
    emailOffers: null,
    interfaceStyles: null,
    subscriptionType: null,
    notes: null
  };

  subscriptionTypes!: Observable<string[]>;
  userSettings: UserSettings = { ...this.orginialUserSettings };

  ngOnInit(): void {
    this.subscriptionTypes = this.dataService.getSubscriptionTypes();
  }
  onSubmit(form: NgForm): void {
    console.log('in OnSubmit: ',form.value);
    this.dataService.postUserSettingsForm(this.userSettings).subscribe(
      result => console.log('result',result),
      error => console.log('error',error)
      );
  }

  onBlur(field: NgModel):void{
    console.log('in onBlur', field.valid);
  }

}
