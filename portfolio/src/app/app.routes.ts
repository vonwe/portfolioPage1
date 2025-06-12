import { Routes } from '@angular/router';
import { LandingPageComponent } from './Components/homepage/landing-page/landing-page.component';
import { ProjectsComponent } from './Components/projects/projects.component';
import { ExperienceComponent } from './Components/experience/experience.component';
import { ContactComponent } from './Components/contact/contact.component';

export const routes: Routes = [
    {path: '', component: LandingPageComponent,},
    { path: 'projects', component: ProjectsComponent },
    { path: 'experience', component: ExperienceComponent },
    { path: 'contact', component: ContactComponent },
];
