import { Component } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { UserSettings } from '../data/user-settings';

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css']
})
export class UserSettingsFormComponent {

  orginialUserSettings: UserSettings = {
    name: '',
    emailOffers: true,
    interfaceStyles: 'dark',
    subscriptionType: 'Annual',
    notes: 'Some text'
  };

  userSettings: UserSettings = { ...this.orginialUserSettings };

  onSubmit(form: NgForm): void {
    console.log('in OnSubmit: ',form.valid);
  }

  onBlur(field: NgModel):void{
    console.log('in onBlur', field.valid);
  }

}
