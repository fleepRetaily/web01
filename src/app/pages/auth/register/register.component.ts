import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faBox, faStore } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  store = faStore
  box = faBox
  Form: FormGroup;
  constructor(private fb: FormBuilder) {
    this.Form = fb.group({
      personal: fb.group({
        nombre: fb.control('', Validators.required) ,
        apellido: fb.control('', Validators.required) ,
        phone: fb.control('', Validators.required) ,
        email: fb.control('', Validators.required) ,
        run:fb.control('', Validators.required)
      }),
      store: fb.group({
        nombre: fb.control('', Validators.required) ,
        type_pay: fb.control('', Validators.required) ,
        direccion: fb.control('', Validators.required) ,
        comuna: fb.control('', Validators.required) ,
        url: fb.control('', Validators.required)
      }),
      send: fb.group({
        product: fb.control('', Validators.required) ,
        cuantity: fb.control('', Validators.required) ,
        where: fb.control('', Validators.required)
      })
    })
  }

  ngOnInit(): void {
    console.log(this.Form)
  }
  onSubmit(): void {
    console.log(this.Form)
  }
}
