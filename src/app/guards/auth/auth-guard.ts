import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CanLoad, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/store/AppState';
import { switchMap, take } from 'rxjs/operators'; // Remove this line



@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {

  constructor(private store: Store<AppState>, private router: Router) { }

  canLoad(): Observable<boolean> {
    return this.store.select('login').pipe(
      take(1),
      switchMap(loginState => {
        if (loginState.isLoggedIn){
          return of(true);
        }
        this.router.navigateByUrl('login');
        return of(false);
      })
    )
  }
}
