import { Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { SignInComponent, SignUpComponent } from '@aws-amplify/ui-angular';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'signIn',
        pathMatch: 'full',
      },
      {
        path: 'profile',
        component: ProfileComponent,
      },
      {
        path: 'signIn',
        component: SignInComponent,
      },
      {
        path: 'signUp',
        component: SignUpComponent,
      },
      {
        path: '**',
        redirectTo: 'signIn',
      },
];
