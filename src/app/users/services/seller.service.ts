import { Injectable } from '@angular/core';
import { BaseService } from "../../shared/services/base.service";
import { Seller } from "../model/seller.entity";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SellerService extends BaseService<Seller> {

  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint = '/sellers';
  }

  // Additional methods specific to sellers can be added here
}
