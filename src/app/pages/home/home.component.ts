import { Component, inject, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators, AbstractControl, ValidationErrors, FormArray } from '@angular/forms';
import { NoticiasComponent } from '../../components/noticias/noticias.component';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { BannersComponent } from '../../components/banners/banners.component';
import { CommonModule } from '@angular/common';  
// Validador simple de ejemplo
function soloLetras(control: AbstractControl): ValidationErrors | null {
  return /^[a-zA-ZÀ-ÿ\u00f1\u00d1\s]+$/.test(control.value || '') ? null : { soloLetras: true };
}

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [
    NoticiasComponent,
    SidebarComponent,
    BannersComponent,
    ReactiveFormsModule,
    CommonModule
  ]
})
export class HomeComponent {
   private fb = inject(FormBuilder);
 
  submitted = false;

  form = this.fb.group({
    nombre:  ['', [Validators.required, Validators.minLength(2)]],
    email:   ['', [Validators.required, Validators.email]],
    mensaje: ['', [Validators.required, Validators.minLength(10)]],
  });

  get f() { return this.form.controls; }

  enviar() {
    this.submitted = true;

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const data = this.form.getRawValue(); 
    console.log('SUBMIT -> datos del formulario:', data);
 


  }

}
