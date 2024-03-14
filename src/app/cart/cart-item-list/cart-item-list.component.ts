import { Component } from '@angular/core'
import { CartService } from 'src/app/cart.service'
import { CartItem } from 'src/app/models/cartItem'
import { Item } from 'src/app/models/item'

@Component({
  selector: 'app-cart-item-list',
  templateUrl: './cart-item-list.component.html',
  styleUrls: ['./cart-item-list.component.css'],
})
export class CartItemListComponent {
  cartItems: CartItem[]

  constructor(cartService: CartService) {
    this.cartItems = cartService.cartItems
  }
}
