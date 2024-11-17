import { Injectable } from '@angular/core';
import { BaseService } from "../../shared/services/base.service";
import { Owe } from "../model/owe.entity";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class OweService extends BaseService<Owe> {

  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint = '/owes';
  }

}
