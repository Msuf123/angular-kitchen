import { Component, inject, Input } from '@angular/core';
import { WorkAreaLocalStoreService } from '../../store/work-area-local-store.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-time-day',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit-time-day.component.html',
  styleUrl: './edit-time-day.component.css'
})
export class EditTimeDayComponent {
storeService=inject(WorkAreaLocalStoreService)
vlaueOfInput=""
@Input() lable!:string|undefined
@Input() position!:number[]|undefined
setTimeOrDate(){
 if(this.lable==="timeLable"){
 this.storeService.editTime({index:this.position as number[],vlaue:this.vlaueOfInput})
 }
 else{
  this.storeService.editDay({index:this.position as number[],vlaue:this.vlaueOfInput})
 }
}


}
