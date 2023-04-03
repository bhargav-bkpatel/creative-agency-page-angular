import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-navigation',
  templateUrl: 'navigation.component.html',
  styleUrls: ['navigation.component.css'],
})
export class Navigation {
  @Input()
  image_src: string = '/assets/playground_assets/logo1-1200w.png'
  @Input()
  button: string = 'Get in touch'
  @Input()
  image_alt1: string = 'image'
  @Input()
  image_src1: string = '/playground_assets/logo1-1200w.png'
  @Input()
  button2: string = 'Get in touch'
  @Input()
  image_alt: string = 'logo'

  constructor() {}
}
