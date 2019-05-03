import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ToastComponent } from './toast/toast.component';
import { LoadingComponent } from './loading/loading.component';


import {
  MatButtonModule, MatCheckboxModule, MatDatepickerModule,
   MatFormFieldModule, MatIconModule, MatInputModule, MatMenuModule, 
   MatRippleModule, MatTableModule, MatToolbarModule, MatListModule, MatChipsModule, MatExpansionModule, MatPaginatorModule
} from '@angular/material';

let material = [
  MatButtonModule, MatCheckboxModule, MatDatepickerModule,
  MatFormFieldModule, MatIconModule, MatInputModule, MatMenuModule, 
  MatRippleModule, MatTableModule, MatToolbarModule, MatListModule, MatChipsModule, MatExpansionModule, MatPaginatorModule
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    ...material,
  ],
  exports: [
    // Shared Modules
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    // Shared Components
    ToastComponent,
    LoadingComponent,
    ...material,
  ],
  declarations: [
    ToastComponent,
    LoadingComponent
  ],
  providers: [
    ToastComponent
  ]
})
export class SharedModule { }
