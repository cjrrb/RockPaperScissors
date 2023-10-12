import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  userChoice: string;
  computerChoice: string;

  constructor() {
    this.userChoice = '';
    this.computerChoice = '';
  }

  generateComputerChoice(): string {
    const choices = ['rock', 'paper', 'scissors'];
    const randomMove = Math.floor(Math.random() * choices.length);
    return choices[randomMove];
  }

  getResult(): string {
    if (this.userChoice === this.computerChoice) {
      return "It's a Tie!";
    } else if (
      this.userChoice === 'rock' && this.computerChoice === 'scissors' ||
      this.userChoice === 'paper' && this.computerChoice === 'rock' ||
      this.userChoice === 'scissors' && this.computerChoice === 'paper'
    ) {
      return "You Win!";
    } else {
      return "You Lose!";
    }
  }
}
