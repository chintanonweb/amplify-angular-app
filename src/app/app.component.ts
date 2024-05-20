import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AmplifyAuthenticatorModule  } from '@aws-amplify/ui-angular';
import { getCurrentUser } from 'aws-amplify/auth';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, CommonModule, AmplifyAuthenticatorModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(){
   const test: any = getCurrentUser();
    console.log("test", test);
  }


}
