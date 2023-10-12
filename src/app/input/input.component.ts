import { Component } from '@angular/core';
import { GameService } from '../game.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  constructor(public gameService: GameService, private router: Router) {}

  updateUserChoice(choice: string) {
    this.gameService.userChoice = choice;
  }

  playGame() {
    if (this.gameService.userChoice) {
      this.gameService.computerChoice = this.gameService.generateComputerChoice();
      this.router.navigate(['/output']);
    } else {
      alert('Please select a move before playing.');
    }
  }
}
