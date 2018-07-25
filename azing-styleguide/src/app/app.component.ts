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
    ['900', '#23292f'],
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
    ['900', '#c2001d'],
  ];
  primary2Colors = [
    ['50', '#ede7f9'],
    ['100', '#d0c3f1'],
    ['200', '#b09be9'],
    ['300', '#8f72e1'],
    ['400', '#7453da'],
    ['500', '#5634d3'],
    ['600', '#4b2fcd'],
    ['700', '#3828c4'],
    ['800', '#2122bd'],
    ['900', '#0015b3'],
  ]
  fontsLink = `<link href="https://fonts.googleapis.com/css?family=Montserrat:400,500,700|Open+Sans:400,600,700|Material+Icons" rel="stylesheet">`;
  themeScssLink = `https://github.com/azing-org/azing.styleguide/blob/master/azing-styleguide/src/theme.scss`;
  themeCssLink = `https://azing-org.github.io/azing.styleguide/azing-styleguide/theme.css`;
  themeScssInclude = `@import 'theme.scss';`;

  copyColor(color) {
    (navigator as any).clipboard.writeText(color[1]);
  }
}
