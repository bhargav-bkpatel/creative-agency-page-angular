import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { Copyright } from './copyright/copyright.component'
import { Footer } from './footer/footer.component'
import { BlogCard } from './blog-card/blog-card.component'
import { PortofolioCard } from './portofolio-card/portofolio-card.component'
import { EventCard } from './event-card/event-card.component'
import { Navigation } from './navigation/navigation.component'
import { Slide } from './slide/slide.component'
import { NavigationLinks } from './navigation-links/navigation-links.component'
import { ServicesCard } from './services-card/services-card.component'

@NgModule({
  declarations: [
    Copyright,
    Footer,
    BlogCard,
    PortofolioCard,
    EventCard,
    Navigation,
    Slide,
    NavigationLinks,
    ServicesCard,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    Copyright,
    Footer,
    BlogCard,
    PortofolioCard,
    EventCard,
    Navigation,
    Slide,
    NavigationLinks,
    ServicesCard,
  ],
})
export class ComponentsModule {}
