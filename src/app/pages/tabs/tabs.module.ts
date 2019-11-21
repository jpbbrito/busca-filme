import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      { path: 'home', children: [{ path: '', loadChildren: () =>
        import('../home/home.module').then( m => m.HomePageModule) }]  },
      { path: 'search', children: [{ path: '', loadChildren: () =>
        import('../search/search.module').then( m => m.SearchPageModule) }] },
      { path: 'detail/:id', children: [{ path: '', loadChildren: () =>
        import('../detail/detail.module').then( m => m.DetailPageModule) }] },
      { path: '', redirectTo: '/tabs/home', pathMatch: 'full' }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
