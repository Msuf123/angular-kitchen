import { Routes } from '@angular/router';
import { DetailsAboutArticlesComponent } from './components/details-about-articles/details-about-articles.component';
import { ExploreComponent } from './components/explore/explore.component';
import { RecipeCardComponent } from './components/explore/recipe-card/recipe-card.component';
import { AppComponent } from './app.component';
import { ParentWritingRecipeComponent } from './components/creator-sections/writing-recipe/parent-writing-recipe/parent-writing-recipe.component';
import { loadWritingGuard } from './guards/creator/parent-writing/load-writing.guard';
import { LogInComponent } from './components/authentication/log-in/log-in.component';
import { SignUpComponent } from './components/authentication/sign-up/sign-up.component';
import { OauthComponent } from './components/authentication/oauth/oauth.component';

export const routes: Routes = [
    {
        path:'',
        component:ExploreComponent,
        children:[
            {path:'',component:RecipeCardComponent}
        ]
        
    }
    ,{
        path:'write',
        component:ParentWritingRecipeComponent,canActivate:[]
    },
{
    path:'login',
    component:LogInComponent
},{
    path:'oauth/google',
    component:OauthComponent
},
{
    path:'signUp',
    component:SignUpComponent
}
];
