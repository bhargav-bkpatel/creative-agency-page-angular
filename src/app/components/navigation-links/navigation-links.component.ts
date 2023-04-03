import { Component, Input } from '@angular/core'

@Component({
  selector: 'navigation-links',
  templateUrl: 'navigation-links.component.html',
  styleUrls: ['navigation-links.component.css'],
})
export class NavigationLinks {
  @Input()
  link3: string = 'Portofolio'
  @Input()
  rootClassName: string = ''
  @Input()
  link2: string = 'About'
  @Input()
  link4: string = 'Blog'
  @Input()
  link1: string = 'Home'

  constructor() {}
}
