import { Component } from '@angular/core';
import {GameService} from "../game.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent {
  constructor(public gameService: GameService, private router: Router) {}

  playAgain() {
    this.gameService.userChoice = '';
    this.gameService.computerChoice = '';
    this.router.navigate(['/']);
  }

  capitalizeFirstLetter(word: string): string {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }
}
