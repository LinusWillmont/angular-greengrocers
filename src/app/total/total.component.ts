import { Component } from '@angular/core'
import { CartService } from '../cart.service'

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.css'],
})
export class TotalComponent {
  constructor(private cartService: CartService) {}

  get total(): number {
    return this.cartService.total
  }
}
