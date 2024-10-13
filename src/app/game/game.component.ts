import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Game } from '../models/game';
import { PlayerComponent } from '../player/player.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { AddPlayerComponent } from '../add-player/add-player.component';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [
    CommonModule,
    PlayerComponent,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    FormsModule,

  ],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent {

  constructor(public dialog: MatDialog) { }

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

  openDialog(): void {
    const dialogRef = this.dialog.open(AddPlayerComponent);

    dialogRef.afterClosed().subscribe((name:string) => {
      this.game.players.push(name);
    });


  }

}
