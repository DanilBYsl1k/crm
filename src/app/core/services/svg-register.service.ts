import { Injectable } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
import { Icons } from "@shared/enums/icons";

@Injectable({
  providedIn: 'root'
})
export class SvgRegisterService {

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) { }

  public registerIcons(): void {
    this.loadIcons(Object.values(Icons), '/assets/icons');
  }

  private loadIcons(iconKeys: string[], iconUrl: string): void {
    iconKeys.forEach(key => {
      this.matIconRegistry.addSvgIcon(key, this.domSanitizer.bypassSecurityTrustResourceUrl(`${iconUrl}/${key}.svg`));
    });
  }
}
