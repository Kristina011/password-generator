import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  length = 0;
  lettersIncluded = false;
  numbersIncluded = false;
  symbolsIncluded = false;
  password = '';

  onChangeLength(value: string) {
    const parsedValue = parseInt(value);

    if (!isNaN(parsedValue)) {
      this.length = parsedValue;
    }
  }

  onChangeUseLetters() {
    this.lettersIncluded = !this.lettersIncluded;
  }

  onChangeUseNumbers() {
    this.numbersIncluded = !this.numbersIncluded;
  }

  onChangeUseSymbols() {
    this.symbolsIncluded = !this.symbolsIncluded;
  }

  onButtonClick() {
    const numbers = '1234567890';
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const symbols = '!@#$%^&*()';

    let validChars = '';
    if (this.lettersIncluded) {
      validChars += letters;
    }
    if (this.numbersIncluded) {
      validChars += numbers;
    }
    if (this.symbolsIncluded) {
      validChars += symbols;
    }
    let generatedPassword = '';
    for (let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    }
    this.password = generatedPassword;
  }
}
