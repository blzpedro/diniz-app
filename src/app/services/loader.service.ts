import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UtilsClass } from '../shared/utils';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  loading = new BehaviorSubject<boolean>(false);
  loading$ = this.loading.asObservable();

  constructor(private utils: UtilsClass) { }

  show() {
    this.loading.next(true)
  }

  dismiss() {
    this.loading.next(false)
  }
}
