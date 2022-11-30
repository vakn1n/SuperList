import { Component, OnInit } from '@angular/core';
import { Product } from '../objects';
import { SuperlistService } from '../superlist-service.service';

@Component({
  selector: 'app-super-list',
  templateUrl: './super-list.component.html',
  styleUrls: ['./super-list.component.css']
})
export class SuperListComponent implements OnInit {

  constructor(private superListService : SuperlistService) { }

  ngOnInit(): void {
  }

  public getSuperList() {
    return this.superListService.superList;
  }

  public removeProduct( productToRemove : Product) {
     this.superListService.removeProductFromList(productToRemove);
  }

  public isSuperListEmpty() {
    return this.getSuperList().length == 0;
  }
}
