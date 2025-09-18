import { Component, input } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.sass'
})
export class Footer {
  sizeWidthHeight = input.required<string>()
}
