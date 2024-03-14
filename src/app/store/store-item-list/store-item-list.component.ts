import { HttpClient } from '@angular/common/http'
import { Component } from '@angular/core'
import { firstValueFrom } from 'rxjs'
import { Item } from 'src/app/models/item'
import { environment } from 'src/environments/environment.development'

@Component({
  selector: 'app-store-item-list',
  templateUrl: './store-item-list.component.html',
  styleUrls: ['./store-item-list.component.css'],
})
export class StoreItemListComponent {
  storeItems: Promise<Item[]> = this.loadStoreItems()

  constructor(private http: HttpClient) {
    this.loadStoreItems()
  }

  async loadStoreItems(): Promise<Item[]> {
    const result = await firstValueFrom(
      this.http.get<Item[]>(environment.apiUrl + 'groceries')
    )
    console.log(result)
    return result
  }
}
