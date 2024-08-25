import { Routes } from '@angular/router';
import { DetailsAboutArticlesComponent } from './components/details-about-articles/details-about-articles.component';
import { ExploreComponent } from './components/explore/explore.component';
import { RecipeCardComponent } from './components/explore/recipe-card/recipe-card.component';
import { ParentWritingRecipeComponent } from './components/creator-sections/writing-recipe/parent-writing-recipe/parent-writing-recipe.component';
import { LogInComponent } from './components/authentication/log-in/log-in.component';
import { SignUpComponent } from './components/authentication/sign-up/sign-up.component';
import { GoogleOauthComponent } from './components/authentication/google-oauth/oauth.component';
import { XOauthComponent } from './components/authentication/x-oauth/x-oauth.component';
import { AccountComponent } from './components/components-for-logged-in-users/account/account.component';
import { deactivateGuard } from './guards/creator/can-deactivate-writing/deactivate.guard';


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
        component:ParentWritingRecipeComponent,
        canDeactivate:[deactivateGuard]
    },{
        path:'articles/:id',
        component:DetailsAboutArticlesComponent
    },
    {
        path:'account',
        component:AccountComponent
    },
{
    path:'login',
    component:LogInComponent
},{
    path:'oauth/google',
    component:GoogleOauthComponent
},
{
    path:'signUp',
    component:SignUpComponent
},{
    path:'oauth/x'
    ,component:XOauthComponent
}
];
