import { Component, AfterViewInit, ChangeDetectorRef, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

import { ContattiService } from '../services/contatti.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { SeoService } from '../services/seo.service'

declare var grecaptcha: any;

@Component({
  selector: 'app-pagina-contatti',
  standalone: true,
  imports: [CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  MatSnackBarModule],
  templateUrl: './pagina-contatti.component.html',
  styleUrl: './pagina-contatti.component.css'
})

export class PaginaContattiComponent implements OnInit, AfterViewInit {
  contattiForm: FormGroup;
  captchaValid: boolean = false;
  captchaToken: string | null = null;
  constructor(
    private fb: FormBuilder,
    private contattiService: ContattiService,
    private snackBar: MatSnackBar,
    private cdr: ChangeDetectorRef,
    private seo: SeoService,
  ) {
    this.contattiForm = this.fb.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      messaggio: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.seo.updateMeta('contatti');
  }

  ngAfterViewInit(): void {
    const checkRecaptcha = () => {
      const grecaptcha = (window as any).grecaptcha;
      if (grecaptcha) {
        grecaptcha.render('captcha-container', {
          sitekey: '6LfE4TcrAAAAACTdOaPSC4kVZAKvTFEzcshc0Yev',
          callback: this.onCaptchaResolved.bind(this)
        });
      } else {
        // Riprova dopo un breve intervallo
        setTimeout(checkRecaptcha, 100);
      }
    };
    checkRecaptcha();
  }

  onCaptchaResolved(token: string) {
    this.captchaToken = token;
    this.captchaValid = !!token;
    this.cdr.detectChanges()
  }

  inviaMessaggio() {
    if (this.contattiForm.valid && this.captchaValid) { 
      const dati = {
        ...this.contattiForm.value,
        captchaToken: this.captchaToken
      };

      this.contattiService.inviaMessaggio(dati).subscribe({
        next: () => {
          this.snackBar.open('Messaggio inviato con successo!', 'Chiudi', {
            duration: 3000
          });
          this.contattiForm.reset();
          grecaptcha.reset(); // Reset del captcha
          this.captchaValid = false; //reset variabile captcha
        },
        error: (error) => {
          console.error('Errore nell\'invio del messaggio:', error);
          this.snackBar.open('Errore durante l\'invio.', 'Chiudi', {
            duration: 3000
          });
        }
      });
    } else if (!this.captchaValid) {
      this.snackBar.open('Verifica il reCAPTCHA!', 'Chiudi', { duration: 3000 });
    }
  }
}
