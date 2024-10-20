import { ApplicationConfig, InjectionToken, importProvidersFrom } from '@angular/core';
import { provideRouter, withHashLocation } from '@angular/router';

import { routes } from './app.routes';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { provideCloudflareLoader, provideCloudinaryLoader } from '@angular/common';
export const url=new InjectionToken<string>('backendUrl')
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),importProvidersFrom(HttpClientModule),provideCloudinaryLoader('https://res.cloudinary.com/dglvbq5bx'),{provide:url,useValue:'http://ec2-3-107-208-87.ap-southeast-2.compute.amazonaws.com:3000'}]
};
