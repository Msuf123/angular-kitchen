import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProfileCard } from './profile-card';

@Injectable({
  providedIn: 'root'
})
export class LoadingItmesService {
  state=new BehaviorSubject<boolean>(true)
  recipies:BehaviorSubject<any>=new BehaviorSubject([])
  addRecipes(data:any[]){
    console.log('Current value',this.recipies.getValue())
    this.recipies.next([...this.recipies.getValue(),...data])
  }
}
