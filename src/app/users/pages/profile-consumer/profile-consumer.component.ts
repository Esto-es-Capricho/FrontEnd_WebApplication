import { Component } from '@angular/core';
import {Consumer} from "../../model/consumer.entity";
import {ConsumersService} from "../../services/consumer.service";

@Component({
  selector: 'app-profile-consumer',
  templateUrl: './profile-consumer.component.html',
  styleUrl: './profile-consumer.component.css'
})
export class ProfileConsumerComponent {

  consumer: Consumer = {} as Consumer;

  // Constructor
  // Here we inject the service that will provide us with the data we need
  // In this case, we are injecting the ConsumersService
  // To get the consumer data, we call the getConsumerByUserId method
  // We pass the user id as a parameter to the method
  // Temporary, we are passing 1 as the user id
  // Then we will do with local storage
  constructor(private consumerService: ConsumersService) {
    this.consumerService.getConsumerByUserId(2).subscribe((consumer: Consumer) => {
      this.consumer = consumer;
      console.log("Profile",this.consumer);
      console.log("Profile",this.consumer.user_id);
    });
  }



}
