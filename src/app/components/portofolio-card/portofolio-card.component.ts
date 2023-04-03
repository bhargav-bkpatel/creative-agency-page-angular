import { Component, Input } from '@angular/core'

@Component({
  selector: 'portofolio-card',
  templateUrl: 'portofolio-card.component.html',
  styleUrls: ['portofolio-card.component.css'],
})
export class PortofolioCard {
  @Input()
  rootClassName: string = ''
  @Input()
  project_title: string = 'Office Life Campaign - Boost your creativity'
  @Input()
  image_alt: string = 'image'
  @Input()
  image_src: string =
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEwfHxwZW9wbGV8ZW58MHx8fHwxNjQzNzA1NTEx&ixlib=rb-1.2.1&w=300'

  constructor() {}
}
