import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public formReserva: FormGroup = this.formBuilder.group({
    localRetirada:['', Validators.required],
    localDevolucao:['', Validators.required],
    dataDevolucao:['', Validators.required],
    dataRetirada:['', Validators.required],

  });

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

}
