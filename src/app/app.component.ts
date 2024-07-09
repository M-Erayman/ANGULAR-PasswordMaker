import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  password: string = '';
  length: number = 0;
  includeLetters: boolean = false;
  includeNumbers: boolean = false;
  includeSymbols: boolean = false;

  modifyLength(value: string) {
    const parsedValue = parseInt(value);
    if (!isNaN(parsedValue)) {
      this.length = parsedValue;
    }
  }

  onlyNumberKey(event: KeyboardEvent) {
    if (!(event.key >= '0' && event.key <= '9')) {
      event.preventDefault(); // Sayı dışında bir karakter ise olayı iptal ediyoruz
    }
  }

  modifyLetters() {
    this.includeLetters = !this.includeLetters;
  }

  modifyNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }

  modifySymbols() {
    this.includeSymbols = !this.includeSymbols;
  }

  buttonClick() {
    const numbers = '1234567890';
    const letters = 'abcdefghijklmnopqrstuvwyz';
    const symbols = '!@#$%#^&*()';
    let validchars = '';
    if (this.includeLetters) {
      validchars += letters;
    }
    if (this.includeNumbers) {
      validchars += numbers;
    }
    if (this.includeSymbols) {
      validchars += symbols;
    }
    let generatedPassword = '';
    for (let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * validchars.length); //Math.random() : 0 ile 1 arasinda sayi uretir...
      generatedPassword += validchars[index];
    }
    this.password = generatedPassword;
  }
}
