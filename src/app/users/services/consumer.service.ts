import { Injectable } from '@angular/core';
import { BaseService } from "../../shared/services/base.service";
import { Consumer } from "../model/consumer.entity";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ConsumersService extends BaseService<Consumer>{

  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint = '/consumers';
  }


}
