import { Injectable } from '@angular/core';
import { BaseService } from "../../shared/services/base.service";
import { HttpClient } from "@angular/common/http";
import { SellerConsumer} from "../model/seller-consumers.entity";

@Injectable({
  providedIn: 'root'
})
export class SellerConsumersService extends BaseService<SellerConsumer> {

  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint = '/seller_consumers';
  }
}
