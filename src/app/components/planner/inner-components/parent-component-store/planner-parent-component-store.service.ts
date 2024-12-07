import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
export interface ParentCompStoreState{
  loading:boolean,
  
}

@Injectable({
  providedIn: 'root'
})
export class PlannerParentComponentStoreService implements ComponentStore<>{

  constructor() { }
}
