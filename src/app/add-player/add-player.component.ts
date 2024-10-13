import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogModule, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-add-player',
  standalone: true,
  imports: [FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogClose,
    MatDialogActions,
    MatDialogContent,   
    MatDialogTitle
  ],
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.scss']
})
export class AddPlayerComponent {
  name: string = '';

  onNoClick(): void {
    console.log('No click');
  }
}