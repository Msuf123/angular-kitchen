import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-empty-dataset',
  standalone: true,
  imports: [],
  templateUrl: './empty-dataset.component.html',
  styleUrl: './empty-dataset.component.css'
})
export class EmptyDatasetComponent {
 router=inject(ActivatedRoute)
 constructor(){
  console.log(this.router.snapshot.url[0],'gg')

 }
}
