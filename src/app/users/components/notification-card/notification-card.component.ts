import { Component, Input, OnInit } from '@angular/core';
import {Notification} from "../../model/notification.entity";
import {NotificationsService} from "../../services/notification.service";

@Component({
  selector: 'app-notification-card',
  templateUrl: './notification-card.component.html',
  styleUrl: './notification-card.component.css'
})
export class NotificationCardComponent implements OnInit {

  // Receive the userId from the parent component
  @Input() userId!: number;
  notifications: Notification[] = [];

  constructor(private notificationService: NotificationsService) {}

  ngOnInit() {
    this.notificationService.getNotificationsByUserId(this.userId).subscribe((notifications: any) => {
      this.notifications = notifications;
      console.log(this.notifications);
    });
  }

  deleteNotification(notification_id: number) {
    this.notificationService.delete(notification_id).subscribe(() => {
      this.notifications = this.notifications.filter((notification) => notification.id !== notification_id);
    });
  }
}
