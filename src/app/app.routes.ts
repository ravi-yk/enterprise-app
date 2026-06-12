import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'products',
    loadChildren: () =>
      import('./features/pages/products/products.routes').then((m) => m.PRODUCTS_ROUTES),
  },
];
