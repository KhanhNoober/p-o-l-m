import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

//Components
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';
import { ArticleComponent } from 'src/app/components/article/article.component';

//Angular Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    NavbarComponent,
    ArticleComponent
  ],
  imports: [
    CommonModule,

    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,

    RouterModule
  ],
  exports: [
    NavbarComponent,
    ArticleComponent,

    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,

    RouterModule
  ]
})
export class SharedModule { }
