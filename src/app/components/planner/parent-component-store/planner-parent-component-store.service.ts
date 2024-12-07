import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
export interface PlannerCompStore{
  isLoading:boolean
  hasError:boolean
}
@Injectable({
  providedIn: 'root'
})
export class PlannerParentComponentStoreService extends ComponentStore<PlannerCompStore> {

  constructor() { 
    super({ isLoading:false,hasError:false})
  }
  readonly toogleLoadingAction=this.updater((state,action:boolean)=>({...state,isLoading:action}))
}
