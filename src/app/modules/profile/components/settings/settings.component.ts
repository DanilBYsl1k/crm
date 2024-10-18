import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DictionaryService } from "@core/services/dictionary.service";
import { ThemeService } from "@core/services/theme.service";

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettingsComponent {
  colorPalette = this.dictionary.colorPalette
  activePallet: { name: string, color: string } | null = null;

  constructor(private dictionary: DictionaryService, private themeService: ThemeService) {}

  setPalette(color: string) {
    this.themeService.setPallet(color);
  }
}
