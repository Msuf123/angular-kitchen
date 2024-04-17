import { Routes } from '@angular/router';
import { DetailsAboutArticlesComponent } from './components/details-about-articles/details-about-articles.component';
import { ExploreComponent } from './components/explore/explore.component';
import { RecipeCardComponent } from './components/explore/recipe-card/recipe-card.component';

export const routes: Routes = [
    {
        path:'articles',
        component:DetailsAboutArticlesComponent
    },
    {
        path:'',
        component:RecipeCardComponent
    }
];
