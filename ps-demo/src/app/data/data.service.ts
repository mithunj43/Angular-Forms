import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { UserSettings } from './user-settings';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  postUserSettingsForm(userSettings: UserSettings):Observable<any> {

    //return this.http.post('https://putsreq.com/K1q5yPTy0sVc6Ei1S18k', userSettings);

    return of(userSettings);
  }

  getSubscriptionTypes(): Observable<string[]>{
    return of(['Monthly','Annual', 'Lifetime'])
  }
}
