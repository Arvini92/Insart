import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FollowersComponent } from './followers/followers.component';
import { ReposComponent } from './repos/repos.component';

const routes: Routes = [
  { path: '', component: ReposComponent },
  { path: 'followers', component: FollowersComponent },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
