import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent {
  constructor(private route: ActivatedRoute, private articleService: ArticleService, private router: Router) { }

  id: string | null = null;
  article: any;
  WaitForRedirect: any;
  WaitForShowingError: any;
  isWaiting: boolean = true;

  ngOnInit(): void {
    window.scrollTo({ behavior: 'smooth', top: 0 });

    this.id = this.route.snapshot.paramMap.get('id');
    this.article = this.articleService.getArticle(Number(this.id));

    this.WaitForRedirect = setTimeout(() => {
      this.isWaiting = false;
    }, 1500);

    if (this.article) {
      this.isWaiting = false;
      clearTimeout(this.WaitForRedirect);
    }

    if (!this.article) {
      this.WaitForShowingError = setTimeout(() => {
        this.router.navigate(['/home']);
      }, 3000);
    }
  }

  ngOnDestroy(): void {
    clearTimeout(this.WaitForRedirect);
    clearTimeout(this.WaitForShowingError);
  }

  navigateToArticle(url: string) {
    window.open(url, '_blank');
  }

}
