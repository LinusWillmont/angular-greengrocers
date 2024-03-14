import { Component, Input } from '@angular/core'
import { CartService } from 'src/app/cart.service'
import { CartItem } from 'src/app/models/cartItem'

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
})
export class CartItemComponent {
  @Input() item!: CartItem

  constructor(private cartService: CartService) {}

  addItem() {
    this.cartService.addToCart(this.item)
  }
  removeItem() {
    this.cartService.removeFromCart(this.item)
  }
}
