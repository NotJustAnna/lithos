import { DependencyInjector, makeInjector } from '@mindspace-io/react';
import { CardService } from './CardService';

export const injector: DependencyInjector = makeInjector([
  { provide: CardService, useClass: CardService },
]);
