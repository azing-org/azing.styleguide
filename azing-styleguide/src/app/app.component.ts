import { Component, ElementRef } from '@angular/core';

declare const float: any;
declare const floaters: any;

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
  ];
  fontsLink = `<link href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,700|Material+Icons" rel="stylesheet">`;
  themeScssLink = `https://github.com/azing-org/azing.styleguide/blob/master/azing-styleguide/src/theme.scss`;
  themeCssLink = `https://azing-org.github.io/azing.styleguide/azing-styleguide/theme.css`;
  themeScssInclude = `@import 'theme.scss';`;

  private floater: any;

  constructor(
    private elRef: ElementRef,
  ) { }

  copyColor(color) {
    (navigator as any).clipboard.writeText(color[1]);
  }

  showFloat() {
    const attachTo = this.elRef.nativeElement.querySelector('.floater-target');
    if (!this.floater) {
      const tpl = document.createElement('div');
      tpl.className = 'mat-body-1';
      Object.assign(tpl.style, {
        borderRadius: '8px',
        overflow: 'hidden',
        backgroundColor: '#fff',
        padding: '16px',
      });
      tpl.innerHTML = 'Hello';
      this.floater = float({
        attachTo,
        hasBackdrop: true,
        closeOnBackdropClick: true,
        backdropColor: 'transparent',
        positionStrategy: floaters.positionStrategies.ninja('TOP_RIGHT', {
                x: 16,
                y: 0
        }, false, false),
        template: tpl,
        customCss: `
            :host {
              border-radius: 8px;
              border: 1px solid rgba(0,0,0,0.1);
              box-shadow: 0 4px 10px 4px rgba(0,0,0,0.06);
            }
        `,
        transition: () => 'bounce-left',
        arrowStrategy: floaters.arrowStrategies.leftStart(6, 16),
      });
    }
    this.floater.show();
  }
}
