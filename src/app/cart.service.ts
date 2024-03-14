import { Injectable } from '@angular/core'
import { CartItem } from './models/cartItem'
import { Item } from './models/item'

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartItems: CartItem[] = []
  total: number = 0

  constructor() {}

  calculateTotal(): void {
    this.total = 0
    this.cartItems.forEach(
      (cartItem) => (this.total += cartItem.quantity * cartItem.price)
    )
  }

  addToCart(item: Item) {
    const itemIndex = this.cartItems.findIndex((c) => c.id === item.id)

    if (itemIndex === -1) {
      this.cartItems.push({ ...item, quantity: 1 })
    } else {
      this.cartItems[itemIndex].quantity++
    }

    this.calculateTotal()
  }

  removeFromCart(item: Item) {
    const itemIndex = this.cartItems.findIndex(
      (cartItem) => cartItem.id === item.id
    )

    if (itemIndex === -1) {
      return
    }

    if (this.cartItems[itemIndex].quantity === 1) {
      this.cartItems.splice(itemIndex, 1)
    } else if (this.cartItems[itemIndex].quantity > 1) {
      this.cartItems[itemIndex].quantity--
    }
    this.calculateTotal()
  }
}
