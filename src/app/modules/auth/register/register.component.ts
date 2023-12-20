import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CreateUserDto, UserModel } from '../../user/entities/user.entity';
import { UserService } from '../../user/services/user.service';
import { AuthService } from '../services/auth.service';
import { TokenService } from '../services/token.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  //TERMINOS Y CONDICIONES
  modal = false;

  openModal() {
    (document.querySelector("#Politicas") as HTMLElement).classList.remove("hidden");
    (document.querySelector("#Politicas") as HTMLElement).classList.add("flex");
    this.modal = true;
  }

  closeModal() {
    (document.querySelector("#Politicas") as HTMLElement).classList.remove("flex");
    (document.querySelector("#Politicas") as HTMLElement).classList.add("hidden");
    this.modal = false;
  }

  users: UserModel = {
    id_user: 0,
    photo_user: 'https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg',
    name_user: '',
    username: '',
    lastname_user: '',
    dateofbirth_user: new Date(),
    gender_user: '',
    address_user: '',
    phone_user: 0,
    email_user: '',
    password: '',
    pass_verification_user: ''
  }
  //  INICIO DE VALIDACIONES LOGIN

  constructor(private router: Router,private authService: AuthService) {}

  dateofbirth_userValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const date_of_birth_user = new Date(control.value);
    const fechaHace18Años = new Date();
    fechaHace18Años.setFullYear(fechaHace18Años.getFullYear() - 18);

    return date_of_birth_user <= fechaHace18Años ? null : { menorDeEdad: true };
  }

  checkPasswords(group: FormGroup) {
    const password_user = group.controls['password_user'].value;
    const password_validation_user = group.controls['password_validation_user'].value;

    return password_user === password_validation_user ? null : { notSame: true };
  }
  // FIN DE VALIDACIONES LOGIN

  ngOnInit(): void {

  }

  nuevoUser = new FormGroup({
    photo_user: new FormControl('https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg', [Validators.required]),
    name_user: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]),
    username: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]),
    lastname_user: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ]+$/)]),
    dateofbirth_user: new FormControl(new Date(), [Validators.required, this.dateofbirth_userValidator]),
    gender_user: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]),
    address_user: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ]+$/)]),
    phone_user: new FormControl('', [Validators.required, Validators.pattern(/^\d{9}$/)]),
    email_user: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*[A-Z])(?=.*\d).*$/)]),
    password_validation_user: new FormControl('', [Validators.required])
  },);

  formCheck() {
    if (this.nuevoUser.valid) {
      console.log('Formulario válido, datos:', this.nuevoUser.value);
    } else {
      alert('Por favor, completa el formulario correctamente antes de enviarlo.');
    }
  }

  submit(data: any) {
    if (this.users) {
      data.id_user = this.users.id_user;
    }
    this.authService.store(data).subscribe((result) => {
      if (result) {
        Swal.fire({
          icon: 'success',
          title: 'Registrado con Exito',
          showConfirmButton: false,
          timer: 1500
        })
      }
    })
    console.log(data);
  }
}
