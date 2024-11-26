import { Component, inject } from '@angular/core';
import { WorkAreaLocalStoreService } from '../work-area-component/store/work-area-local-store.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-work-area-title',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './work-area-title.component.html',
  styleUrl: './work-area-title.component.css',providers:[WorkAreaLocalStoreService]
})
export class WorkAreaTitleComponent {
 workAreaStore=inject(WorkAreaLocalStoreService)
 titleOfPlan="Loading"
 constructor(){
  this.workAreaStore.getAllData$.subscribe((state)=>{
    this.titleOfPlan=state.nameOfMeal
  })
 }
 nameChanged(val:string){
 
  this.workAreaStore.editPlanName(val)
 }
}
