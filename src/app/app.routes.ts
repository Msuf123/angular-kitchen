import { Routes } from '@angular/router';
import { DetailsAboutArticlesComponent } from './components/details-about-articles/details-about-articles.component';
import { ExploreComponent } from './components/explore/explore.component';
import { RecipeCardComponent } from './components/explore/recipe-card/recipe-card.component';
import { AppComponent } from './app.component';
import { ParentWritingRecipeComponent } from './components/creator-sections/writing-recipe/parent-writing-recipe/parent-writing-recipe.component';
import { loadWritingGuard } from './guards/creator/parent-writing/load-writing.guard';
import { LogInComponent } from './components/authentication/log-in/log-in.component';

export const routes: Routes = [
    {
        path:'',
        component:ExploreComponent,
        
    }
    ,{
        path:'write',
        component:ParentWritingRecipeComponent,canActivate:[]
    },
{
    path:'login',
    component:LogInComponent
}
];
