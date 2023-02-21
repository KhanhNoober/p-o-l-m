import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from 'src/app/models/article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent {
  @Input() article!: Article

  constructor(private router: Router) { }

  navigateToArticle(id: number) {
    this.router.navigate(['/article', id]);
  }
}
