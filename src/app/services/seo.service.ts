import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { SEO_CONFIG } from '../config/seo.config';

@Injectable({ providedIn: 'root' })
export class SeoService {
  constructor(private title: Title, private meta: Meta) { }

  updateMeta(routeKey: string): void {
    const data = SEO_CONFIG[routeKey];
    if (!data) return;

    this.title.setTitle(data.title);
    this.meta.updateTag({ name: 'description', content: data.description });

    if (data.keywords) {
      this.meta.updateTag({ name: 'keywords', content: data.keywords });
    }
    if (data.image) {
      this.meta.updateTag({ property: 'og:image', content: data.image });
    }
    if (data.url) {
      this.meta.updateTag({ property: 'og:url', content: data.url });
    }
  }
}
