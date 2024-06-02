import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import BaseQuestion from '../../../../../custom-class/questions-class/creator-write-sec/base.question';
import { IndividualInputFormComponent } from '../../individual-input-form/individual-input-form.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-writing-first-section',
  standalone: true,
  imports: [IndividualInputFormComponent,CommonModule],
  templateUrl: './writing-first-section.component.html',
  styleUrl: './writing-first-section.component.css'
})
export class WritingFirstSectionComponent {
@Input() formGroup!:FormGroup
@Input() questions!:BaseQuestion[]

}
