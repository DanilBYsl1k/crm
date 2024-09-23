import { Injectable, signal } from '@angular/core';

import { palletType } from "@shared/types/pallet.type";

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {

  colorPalette = signal<palletType[]>([
    { name: 'pink', color: '#ee5e99' },
    { name: 'purple', color: '#7f77f1' },
    { name: 'blue', color: '#1090e0' },
    { name: 'light-purple', color: '#b660e0' },
    { name: 'ocean-blue', color: '#6985ff' },
    { name: 'orange', color: '#e16b16' },
    { name: 'blue-green', color: '#0f9d9f' },
    { name: 'brown', color: '#aa8d80' },
    { name: 'grey', color: '#595d66' },
    { name: 'green', color: '#3db88b' },
  ])
}
