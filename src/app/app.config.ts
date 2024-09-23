import { APP_INITIALIZER, ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient, withInterceptors } from "@angular/common/http";

import { routes } from './app.routes';
import { tokenInterceptor } from "@core/interceptor/token.interceptor";
import { SvgRegisterService } from "@core/services/svg-register.service";
import { errorHandlerInterceptor } from "@core/interceptor/error-handler.interceptor";

function initializeSvgRegisterService(svgRegisterService: SvgRegisterService): () => void {
  return () => svgRegisterService.registerIcons();
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(
      withInterceptors([
        tokenInterceptor,
        // errorHandlerInterceptor
      ])
    ),
    provideAnimationsAsync(),
    {
      provide: APP_INITIALIZER,
      useFactory: initializeSvgRegisterService,
      deps: [SvgRegisterService],
      multi: true
    }
  ]
};
