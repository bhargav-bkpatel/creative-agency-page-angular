import { Component, Input } from '@angular/core'

@Component({
  selector: 'services-card',
  templateUrl: 'services-card.component.html',
  styleUrls: ['services-card.component.css'],
})
export class ServicesCard {
  @Input()
  image_alt: string = 'image'
  @Input()
  image_src: string = '/assets/playground_assets/website-200h.png'
  @Input()
  text: string = 'Website design'
  @Input()
  text1: string =
    'Create your ubest unique App development, crafted for your business needs.'
  @Input()
  text2: string = 'Learn more'

  constructor() {}
}
