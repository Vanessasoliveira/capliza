import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.scss']
})
export class ReservationsComponent implements OnInit {

  public reservationsQuery: FormGroup = this.formBuilder.group({
    cpf:['', [Validators.required, Validators.minLength(11), Validators.maxLength(11)]],
    numeroReserva:['', Validators.required],

  });

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  submitForm(){

  }

}
