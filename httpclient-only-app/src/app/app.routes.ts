import { Routes } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { PostComponent } from './components/post/post.component';

export const routes: Routes = [
  {path: '', component: ListComponent},
  {path: ':slug', component: PostComponent}
];
