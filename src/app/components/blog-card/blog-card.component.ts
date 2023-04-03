import { Component, Input } from '@angular/core'

@Component({
  selector: 'blog-card',
  templateUrl: 'blog-card.component.html',
  styleUrls: ['blog-card.component.css'],
})
export class BlogCard {
  @Input()
  button: string = 'Web Design'
  @Input()
  image_alt: string = 'image'
  @Input()
  text1: string = 'Dec 8, 2022'
  @Input()
  image_src: string = '/assets/playground_assets/rectangle%2099-1500w.png'
  @Input()
  rootClassName: string = ''
  @Input()
  text: string = 'Learn more'
  rawyrv8: string = ' '

  constructor() {}
}
