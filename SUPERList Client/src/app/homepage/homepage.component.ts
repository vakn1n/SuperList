import { Component, OnInit } from '@angular/core';
import { Product } from '../objects';
import { SuperlistService } from '../superlist-service.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  public productDataForm: FormGroup = new FormGroup({
    productNameForm: new FormControl(''),
    productAmountForm: new FormControl(''),
  });

  constructor(private superListService: SuperlistService) {

  }

  ngOnInit(): void {
   
  }

  public addProductToList() {
    let product = new Product(this.productDataForm.value.productNameForm, this.productDataForm.value.productAmountForm);
    this.superListService.addProductToList(product);
  }
}