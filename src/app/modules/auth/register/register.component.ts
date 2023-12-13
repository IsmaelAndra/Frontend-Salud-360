import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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


  //  INICIO DE VALIDACIONES LOGIN
  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.registerForm = this.formBuilder.group({
      name_user: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]],
      lastname_user: ['', [Validators.required, Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ]+$/)]],
      address_user: ['', [Validators.required, Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ]+$/)]],
      phone_user: ['', [Validators.required, Validators.pattern(/^\d{9}$/)]],
      gender_user: ['', Validators.required],
      date_of_birth_user: ['', [Validators.required, this.dateofbirth_userValidator]],
      mail_user: ['', [Validators.required, Validators.email]],
      password_user: ['', [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*[A-Z])(?=.*\d).*$/)]],
      password_validation_user: ['', [Validators.required]],
    }, { validator: this.checkPasswords });

  }

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
    name_user: new FormControl('',),
    lastname_user: new FormControl(''),
    mail_user: new FormControl(''),
    address_user: new FormControl(''),
    phone_user: new FormControl(''),
    date_of_birth_user: new FormControl(new Date()),
    password_user: new FormControl(''),
    password_validation_user: new FormControl(''),
    status_user: new FormControl(false)
  },);

  formCheck() {
    if (this.registerForm.valid) {
      console.log('Formulario válido, datos:', this.registerForm.value);
    } else {
      alert('Por favor, completa el formulario correctamente antes de enviarlo.');
    }
  }

  register() {
    this.router.navigate(['/login']);
  }
}
