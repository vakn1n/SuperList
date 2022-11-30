import { Injectable } from '@angular/core';
import axios from 'axios';
import { Product } from './objects';

@Injectable({
  providedIn: 'root'
})
export class SuperlistService {
  public superList: Array<Product> = new Array();

  constructor() {
    this.getSuperList();
  }

  private getSuperList() {
    axios.get('http://localhost:1906/superlist').then((response) => {
      this.superList = response.data;
    });
  }

  public removeProductFromList(productToRemove: Product) {
    let index = this.superList.indexOf(productToRemove);
    this.superList.splice(index,1);
    this.updateSuperListDB();
  }

  public addProductToList(productToAdd: Product) {
    this.superList.push(productToAdd);
    this.updateSuperListDB();
  }

  public async updateSuperListDB() {
    const response = await axios.post('http://localhost:1906/update-superlist', {
      data : this.superList
    }); 
  }
}
