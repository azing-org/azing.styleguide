import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MatCardModule, MatToolbarModule, MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule, MatDividerModule, MatTooltipModule, MatRippleModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    FlexLayoutModule,
    MatDividerModule,
    MatTooltipModule,
    MatRippleModule,
    MatInputModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
