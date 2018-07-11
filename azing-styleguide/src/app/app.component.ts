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
  fontsLink = `<link href="https://fonts.googleapis.com/css?family=Montserrat|Open+Sans" rel="stylesheet">`;
  themeScss = `
  @import '~@angular/material/theming';
@include mat-core();

// Define azing colors.
$mat-azing-red: (
  50: #ffebef,
  100: #ffcdd4,
  200: #f5999c,
  300: #ed7176,
  400: #f84d53,
  500: #ff3939,
  600: #f02e38,
  700: #dd2232,
  800: #d0192a,
  900: #c2001d,
  A100: #ff8a80,
  A200: #ff5252,
  A400: #ff1744,
  A700: #d50000,
  contrast: (
    50: $dark-primary-text,
    100: $dark-primary-text,
    200: $dark-primary-text,
    300: $light-primary-text,
    400: $light-primary-text,
    500: $light-primary-text,
    600: $light-primary-text,
    700: $light-primary-text,
    800: $light-primary-text,
    900: $light-primary-text,
    A100: $dark-primary-text,
    A200: $light-primary-text,
    A400: $light-primary-text,
    A700: $light-primary-text,
  )
);

$mat-azing-gray: (
  50: #ededed,
  100: #d0d3d7,
  200: #b0b7be,
  300: #909aa6,
  400: #788593,
  500: #617082,
  600: #546271,
  700: #444f5b,
  800: #353d46,
  900: #23292f,
  A100: #cfd8dc,
  A200: #b0bec5,
  A400: #78909c,
  A700: #455a64,
  contrast: (
    50: $dark-primary-text,
    100: $dark-primary-text,
    200: $dark-primary-text,
    300: $light-primary-text,
    400: $light-primary-text,
    500: $light-primary-text,
    600: $light-primary-text,
    700: $light-primary-text,
    800: $light-primary-text,
    900: $light-primary-text,
    A100: $dark-primary-text,
    A200: $light-primary-text,
    A400: $light-primary-text,
    A700: $light-primary-text,
  )
);

$azing-theme-primary: mat-palette($mat-azing-gray);
$azing-theme-accent: mat-palette($mat-azing-red, A200, A100, A400);
$azing-theme-warn: mat-palette($mat-red);

$azing-light-theme: mat-light-theme($azing-theme-primary, $azing-theme-accent, $azing-theme-warn);

@include angular-material-theme($azing-light-theme);

// Override Typography.
$custom-typography: mat-typography-config(
    $font-family:   '"Open Sans", sans-serif',
    $headline:      mat-typography-level(24px, 32px, 400, 'Montserrat'),
    $title:         mat-typography-level(20px, 32px, 500, 'Montserrat'),
    $subheading-2:  mat-typography-level(16px, 28px, 400, 'Montserrat'),
    $subheading-1:  mat-typography-level(15px, 24px, 400, 'Montserrat')
);

@include angular-material-typography($custom-typography);
`;
}
