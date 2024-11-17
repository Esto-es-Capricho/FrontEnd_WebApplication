import {Component, OnInit} from '@angular/core';
import {ConsumersService} from "../../../users/services/consumer.service";
import {Consumer} from "../../../users/model/consumer.entity";

@Component({
  selector: 'app-debts-persons',
  templateUrl: './debts-persons.component.html',
  styleUrl: './debts-persons.component.css'
})
export class DebtsPersonsComponent {

    consumer: Consumer = {} as Consumer

    constructor(private consumersService: ConsumersService) {
      this.consumersService.getConsumerByUserId(2).subscribe((consumer: Consumer) => {
        this.consumer = consumer;
        console.log("Debt-Component",this.consumer.id);
      });
    }
}
