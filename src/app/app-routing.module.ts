import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ArticleComponent } from './article/article.component';
import { TimeGuard } from './time.guard';

const routes: Routes = [
    { path: '', component: MainComponent },
    { 
        path: 'article/:id', 
        component: ArticleComponent,
        canActivate: [ TimeGuard ],
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    providers: [ TimeGuard ],
    exports: [ RouterModule ],

})
export class AppRoutingModule {}
