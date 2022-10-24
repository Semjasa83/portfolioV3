import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Marcel de Zanna';

  width: number = 0;
  mobileWidth: boolean = false;

  @HostListener('window:resize', ['$event'])
	onResize(event:any) {
		this.width = event.target.innerWidth;
    this.mobileMenu();

}

mobileMenu() {
  if (this.width < 550 ) {
    this.mobileWidth = true;
  } else {
    this.mobileWidth = false;
  }
}

}
