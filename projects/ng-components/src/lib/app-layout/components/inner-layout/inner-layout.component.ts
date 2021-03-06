import { AfterViewInit, Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { PerfectScrollbarConfigInterface, PerfectScrollbarDirective } from 'ngx-perfect-scrollbar';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'lib-inner-layout',
  templateUrl: './inner-layout.component.html',
  styleUrls: ['./inner-layout.component.scss']
})
export class InnerLayoutComponent implements OnInit, OnDestroy, AfterViewInit {
  private layoutRouter: Subscription;
  @ViewChild(MatSidenav, { static: true })
  sideNav: MatSidenav;
  @ViewChild(PerfectScrollbarDirective, { static: true })
  directiveScroll: PerfectScrollbarDirective;
  @Input()
  isScreenSmall = false;
  @Output()
  fullScreenToggle = new EventEmitter<void>();

  url: string;
  sidePanelOpened;
  options = {
    collapsed: false,
    boxed: false,
    dark: false,
    dir: 'ltr'
  };

  config: PerfectScrollbarConfigInterface = {};


  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.url = this.router.url;

    this.layoutRouter = this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        document.querySelector(
          '.app-inner > .mat-drawer-content > div'
        ).scrollTop = 0;
        this.url = event.url;
        this.runOnRouteChange();
      });
  }

  ngOnDestroy(): void {
    this.layoutRouter.unsubscribe();
  }

  runOnRouteChange(): void {
    if (this.isOver()) {
      this.sideNav.close();
    }

    this.updatePS();
  }


  isOver(): boolean {
    return !this.isScreenSmall;
  }

  menuMouseOver() {
    if (this.isScreenSmall && this.options.collapsed) {
      this.sideNav.mode = 'over';
    }
  }

  menuMouseOut() {
    if (this.isScreenSmall && this.options.collapsed) {
      this.sideNav.mode = 'side';
    }
  }

  updatePS() {
    if (!this.isScreenSmall) {
      setTimeout(() => {
        this.directiveScroll.update();
      }, 350);
    }
  }

  ngAfterViewInit() {
  }

}
