import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { PayModel } from '../entities/pay.entity';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PayService } from '../services/pay.service';

@Component({
  selector: 'app-appointment-pay',
  templateUrl: './appointment-pay.component.html',
  styleUrls: ['./appointment-pay.component.css'],
  animations: [
    trigger('flipState', [
      state('active', style({
        transform: 'rotateY(179deg)'
      })),
      state('inactive', style({
        transform: 'rotateY(0)'
      })),
      transition('active => inactive', animate('500ms ease-out')),
      transition('inactive => active', animate('500ms ease-in'))
    ])
  ]
})
export class AppointmentPayComponent {
  pays: PayModel = {
    id_pay: 0,
    payment_method: 'tarjeta',
    card_name: '',
    card_number: 0,
    expiration_month: 0,
    expiration_year: 0,
    security_code: 0,
    status_pay: 'Activo'
  }

  newPay = new FormGroup({
    payment_method: new FormControl('tarjeta'),
    card_name: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z]+\s[a-zA-Z]+$/)]),
    card_number: new FormControl(0, [Validators.required,Validators.pattern(/^\d{16}$/)]),
    expiration_month: new FormControl(0, Validators.required),
    expiration_year: new FormControl(0, Validators.required),
    security_code: new FormControl(0, [Validators.required,Validators.pattern(/^\d{3}$/)]),
    status_pay: new FormControl('activo'),
  })

  constructor(private router: Router, private payService: PayService) { }

  ngOnInit() {
  }

  flip: string = 'inactive';

  toggleFlip() {
    this.flip = (this.flip == 'inactive') ? 'active' : 'inactive';
  }

  submit(data: any) {
    if (this.pays) {
      data.id_pay = this.pays.id_pay;
    }
    this.payService.store(data).subscribe((result) => {
      if (result) {
        Swal.fire({
          icon: 'success',
          title: "¡Pago Realizado con Exito!",
          showConfirmButton: false,
          timer: 1500
        })
      }
    })
    setTimeout(() => {
      this.router.navigate(['/appointment-finish'])
    }, 1700);
    console.log(data);
  }
}
