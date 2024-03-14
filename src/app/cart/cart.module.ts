import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CartItemListComponent } from './cart-item-list/cart-item-list.component'
import { CartItemComponent } from './cart-item/cart-item.component'

@NgModule({
  declarations: [CartItemListComponent, CartItemComponent],
  imports: [CommonModule],
  exports: [CartItemListComponent, CartItemComponent],
})
export class CartModule {}
