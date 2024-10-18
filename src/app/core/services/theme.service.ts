import { computed, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  pallet = signal('');
  palletComp = computed(() => 'theme-' + this.pallet());

  checkPallet() {

    let pallet = localStorage.getItem('pallet');
    this.pallet.set(pallet ? pallet : 'default');

  }

  setPallet(pallet: string) {
    this.pallet.set(pallet);
    return localStorage.setItem('pallet', this.pallet());
  }
}
