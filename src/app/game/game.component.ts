import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Game } from '../models/game';
import { PlayerComponent } from '../player/player.component';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [
    CommonModule,
    PlayerComponent
  ],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent {

  pickCardAnimation = false;
  currentCard: string = '';
  game: Game = new Game();

  ngOnInit() {
    this.newGame();
  }

  newGame() {
    this.game = new Game();
    console.log('new game', this.game);
  }

  takeCard(): void {
    let card = this.game.stack.pop();

    if (!this.pickCardAnimation) {
      if (card !== undefined) {
        this.currentCard = card;
        this.pickCardAnimation = true;
        console.log('Card taken', card);
        
      } else {
        console.log('No more cards in the stack');
      }

      setTimeout(() => {
        this.game.playedCards.push(this.currentCard);
        this.pickCardAnimation = false;
      }, 1000);
    }
  }
}
