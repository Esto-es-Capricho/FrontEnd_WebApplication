import { Component, EventEmitter, Input, Output, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ConsumersService } from "../../services/consumer.service";
import { Consumer } from "../../model/consumer.entity";

@Component({
  selector: 'app-consumer-edit',
  templateUrl: './consumer-edit.component.html',
  styleUrls: ['./consumer-edit.component.css']
})
export class ConsumerEditComponent implements OnInit, OnChanges {
  // Attributes
  @Input() consumer_id!: number;
  @Input() editMode = false;
  @Output() editCanceled = new EventEmitter<void>();
  consumer: Consumer = {} as Consumer;

  consumerSchema: any = {
    name: '',
    lastname: '',
    image_profile: ''
  };

  // Methods
  constructor(private consumerService: ConsumersService,
              private snackBar: MatSnackBar) {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['consumer_id'] && changes['consumer_id'].currentValue) {
      console.log("ID", this.consumer_id);
      this.consumerService.getById(Number(this.consumer_id)).subscribe((consumer: Consumer) => {
        this.consumer = consumer;
        this.consumerSchema.name = this.consumer.name;
        this.consumerSchema.lastname = this.consumer.lastname;
        this.consumerSchema.image_profile = this.consumer.image_profile;
        console.log("Aqui", this.consumer);
        console.log("Aqui", this.consumer.name);
      });
    } else {
      console.error('No se ha recibido un ID de consumidor');
    }
  }

  onSubmit(form: NgForm) {
    if (form.valid && this.editMode) {

      this.consumer.name = this.consumerSchema.name;
      this.consumer.lastname = this.consumerSchema.lastname;
      this.consumer.image_profile = this.consumerSchema.image_profile;

      console.log("Consumer", this.consumer);

      this.consumerService.update(this.consumer_id, this.consumer).subscribe(() => {
        this.snackBar.open('Consumidor actualizado', 'Cerrar', {
          duration: 2000
        });
        this.editMode = false;
        this.editCanceled.emit();
      });
    }
  }



  onEditImage() {

  }


}
