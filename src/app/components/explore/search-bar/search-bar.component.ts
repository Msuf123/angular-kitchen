import { Component, inject } from '@angular/core';
import { IconsService } from '../../../services/icons/icons.service';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {
 icons=inject(IconsService)
 searchIcon=this.icons.searchBar
}
