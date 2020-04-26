import { Injectable } from '@angular/core';
import { AppSettings } from '../models/app-setting.model';

@Injectable({
  providedIn: 'root'
})
export class AppSettingsService {
  
  appSettings: AppSettings;
  
  constructor() {
    this.loadData();
  }
  
  saveData() {
    localStorage.setItem('app-settings', JSON.stringify(this.appSettings));
  }

  loadData() {
    const data = JSON.parse(localStorage.getItem('app-settings')) as AppSettings;
    if (!data) return this.appSettings = new AppSettings();
    
    this.appSettings = data;
  }
}
