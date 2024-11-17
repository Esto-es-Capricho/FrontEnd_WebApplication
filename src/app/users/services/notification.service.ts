import { Injectable } from '@angular/core';
import { BaseService } from "../../shared/services/base.service";
import { Notification } from "../model/notification.entity";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class NotificationsService extends BaseService<Notification>{

  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint = '/notifications';
  }

}
