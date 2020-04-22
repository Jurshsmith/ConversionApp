import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { LayoutModule } from '@angular/cdk/layout';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import {MatSnackBarModule, MatSnackBar} from '@angular/material/snack-bar';
import { NotificationsComponent } from './components/notifications/notifications.component';


@NgModule({
  declarations: [NotificationsComponent],
  imports: [
    CommonModule,
    MatRippleModule,
    MatGridListModule,
    LayoutModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatSnackBarModule
  ],
  providers: [ 
    MatSnackBar
  ],
  exports: [
    CommonModule,
    MatRippleModule,
    MatGridListModule,
    LayoutModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    NotificationsComponent
  ]
})
export class SharedModule { }
