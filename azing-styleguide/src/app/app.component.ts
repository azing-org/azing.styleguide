import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  primaryColors = [
    ['50', '#ededed'],
    ['100', '#d0d3d7'],
    ['200', '#b0b7be'],
    ['300', '#909aa6'],
    ['400', '#788593'],
    ['500', '#617082'],
    ['600', '#546271'],
    ['700', '#444f5b'],
    ['800', '#353d46'],
    ['900', '#23292f']
  ];
  accentColors = [
    ['50', '#ffebef'],
    ['100', '#ffcdd4'],
    ['200', '#f5999c'],
    ['300', '#ed7176'],
    ['400', '#f84d53'],
    ['500', '#ff3939'],
    ['600', '#f02e38'],
    ['700', '#dd2232'],
    ['800', '#d0192a'],
    ['900', '#c2001d']
  ];
  fontsLink = `<link href="https://fonts.googleapis.com/css?family=Montserrat|Open+Sans|Material+Icons" rel="stylesheet">`;
  themeScssLink = `https://github.com/azing-org/azing.styleguide/blob/master/azing-styleguide/src/theme.scss`;
  themeScssInclude = `@import 'theme.scss';`;
  css = `h1.mat-display-4 { font: 300 112px/112px Montserrat; margin: 0 0 56px; }
h1.mat-display-3 { font: 400 56px/56px Montserrat; margin: 0 0 64px; }
h1.mat-display-2 { font: 400 45px/48px Montserrat; margin: 0 0 64px; }
h1.mat-display-1 { font: 400 34px/40px Montserrat; margin: 0 0 64px; }
h1.mat-h1 { font: 400 24px/32px Montserrat; margin: 0 0 16px; }
h2.mat-h2 { font: 500 20px/32px Montserrat; margin: 0 0 16px; }
h3.mat-h3 { font: 700 16px/28px Open Sans; margin: 0 0 16px; }
h4.mat-h4 { font: 700 15px/24px Open Sans; margin: 0 0 16px; }
.mat-body-2 { font: 500 14px/24px "Open Sans", sans-serif; }
.mat-body-1 { font: 400 14px/20px "Open Sans", sans-serif; }
  `;
}
