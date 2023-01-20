import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.scss']
})
export class CadastroUsuarioComponent implements OnInit {

  public cadastroForm: FormGroup = this.formBuilder.group({
    fullName:['', Validators.required],
    cpf:['', [Validators.required, Validators.minLength(11), Validators.maxLength(11)]],
    email:['', [Validators.required, Validators.email]],
    phone:['',Validators.required],
    cnh:['',Validators.required],
    password:['',[Validators.required, Validators.minLength(7)]],
    confirmPassword:['',[Validators.required, Validators.minLength(7)]],

  });
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  public submitForm(){

    if(this.cadastroForm.valid){
      console.log(this.cadastroForm.value);
      console.log(this.cadastroForm.value.fullName);
      console.log(this.cadastroForm.value.email);
      console.log(this.cadastroForm.value.phone);
      console.log(this.cadastroForm.value.cpf);
      console.log(this.cadastroForm.value.password);
      console.log(this.cadastroForm.value.email);
    }

  }

}
