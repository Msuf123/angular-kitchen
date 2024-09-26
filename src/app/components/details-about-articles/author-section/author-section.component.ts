import { Component, ViewEncapsulation } from '@angular/core';

import { AuthorDetailsComponent } from './author-details/author-details.component';
import { LoadingAuthorComponent } from './loading-author/loading-author.component';
import { AccountComponent } from "../../components-for-logged-in-users/account/account.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-author-section',
  standalone: true,
  imports: [ AuthorDetailsComponent, LoadingAuthorComponent, AccountComponent,CommonModule],
  templateUrl: './author-section.component.html',
  styleUrl: './author-section.component.css',
  encapsulation:ViewEncapsulation.None
})
export class AuthorSectionComponent {
  
  loading=false
  data=null
}
