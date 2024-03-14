import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { StoreItemListComponent } from './store-item-list/store-item-list.component'
import { StoreItemComponent } from './store-item/store-item.component'
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [StoreItemListComponent, StoreItemComponent],
  imports: [CommonModule, HttpClientModule],
  exports: [StoreItemListComponent, StoreItemComponent],
})
export class StoreModule {}
