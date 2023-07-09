import { Component } from '@angular/core';
import { UserSettings } from '../data/user-settings';

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css']
})
export class UserSettingsFormComponent {

  userSettings: UserSettings = {
    name: 'Pooja Mithun',
    emailOffers: true,
    interfaceStyles: 'dark',
    subscriptionType: 'Annual',
    notes: 'Some text'
  };

}
