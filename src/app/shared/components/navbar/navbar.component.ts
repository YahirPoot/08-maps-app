import { Component, inject } from '@angular/core';
import { routes } from '../../../app.routes';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { filter, map, } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [ AsyncPipe, RouterLink],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  router = inject(Router);

  routes = routes.map((route) => ({
    path: route.path,
    title: `${route.title ?? 'Maps en Angular'}`
  })).filter((route) => route.path !== '**');

  //* Sacando el titulo de la ruta actual como un observable
  //* Cuando tenga el signo $ al final de una variable, significa que es un observable
  pageTitle$ = this.router.events.pipe(
    filter((event) => event instanceof NavigationEnd),
    // tap((event) => console.log(event)),
    map((event) => event.url),
    map((url) => this.routes.find((route) =>  `/${route.path}` === url)?.title ?? 'Maps en Angular')
  );

  // Sacando el titulo de la ruta actual como una señal
  //  Por alguna razon no me reconoce el toSignal
  // pageTitle = toSignal(
  //   this.router.events.pipe(
  //     filter((event) => event instanceof NavigationEnd),
  //     tap((event) => console.log(event)),
  //     map((event) => event.url),
  //     map((url) => this.routes.find((route) =>  `/${route.path}` === url)?.title ?? 'Maps en Angular')
  //   );
  // )
}
