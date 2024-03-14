import { Component, Input } from '@angular/core'
import { CartService } from 'src/app/cart.service'
import { Item } from 'src/app/models/item'

@Component({
  selector: 'app-store-item',
  templateUrl: './store-item.component.html',
  styleUrls: ['./store-item.component.css'],
})
export class StoreItemComponent {
  @Input() item!: Item

  constructor(private cartSerive: CartService) {}

  addItemToCart(): void {
    this.cartSerive.addToCart(this.item)
  }
}
