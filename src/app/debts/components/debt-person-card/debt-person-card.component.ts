import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { SellerConsumersService } from "../../services/seller-consumers.service";
import {SellerService} from "../../../users/services/seller.service";
import { SellerConsumer } from "../../model/seller-consumers.entity";
import { OweService } from "../../services/owe.service";
import { Owe } from "../../model/owe.entity";
import {Seller} from "../../../users/model/seller.entity";


@Component({
  selector: 'app-debt-person-card',
  templateUrl: './debt-person-card.component.html',
  styleUrl: './debt-person-card.component.css'
})
export class DebtPersonCardComponent implements OnChanges {

  @Input() consumer_id!: number;
  sellers_consumers: SellerConsumer[] = [];
  sellers: Seller[] = [];
  owes: Owe[] = [];

  constructor(private sellerConsumersService: SellerConsumersService,
              private oweService: OweService,
              private sellerService: SellerService) {
  }

  ngOnChanges(changes: SimpleChanges) {

    if (changes['consumer_id'] && changes['consumer_id'].currentValue !== undefined) {
      console.log("Debt-card", this.consumer_id);
      this.loadSellerConsumersAndOwes(this.consumer_id);
    }
  }

  private loadSellerConsumersAndOwes(consumerId: number) {

    this.sellerConsumersService.getSellersByConsumerId(consumerId).subscribe((sellerConsumer: any) => {
      this.sellers_consumers = sellerConsumer;
      console.log("Sellers_Consumers",this.sellers_consumers);
      // Get all sellers
      // Filter sellers by seller_id
      this.sellerService.getAll().subscribe((seller: any) => {
        this.sellers = seller.filter((seller: Seller) => this.sellers_consumers.map((sc: any) => sc.seller_id).includes(seller.id));
        console.log("Sellers",this.sellers);
      });
    });

    this.oweService.getOwesByConsumerId(consumerId).subscribe((owe: any) => {
      this.owes = owe;
      console.log("Owes",this.owes);
    });





  }

}
