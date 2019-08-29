import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SelectionCriteriaComponent } from './selection-criteria/selection-criteria.component';
import { ThemsanphamComponent } from './themsanpham/themsanpham.component';

import { BraceletComponent } from './jewelry/bracelet/bracelet.component';
import { PendantComponent } from './jewelry/pendant/pendant.component';
import { EarringsComponent } from './jewelry/earrings/earrings.component';
import { DiamondsComponent } from './jewelry/diamonds/diamonds.component';
import { CharmingComponent } from './jewelry/charming/charming.component';
import { PearlsComponent } from './jewelry/pearls/pearls.component';
import { RingsComponent } from './jewelry/rings/rings.component';

import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';


import { WeddingComponent } from './collections/wedding/wedding.component';
import { WeddingDetailComponent } from './collections/wedding-detail/wedding-detail.component';

import { ChainComponent } from './collections/chain/chain.component';
import { ChainDetailComponent } from './collections/chain-detail/chain-detail.component';

import { DreamcatcherComponent } from './collections/dreamcatcher/dreamcatcher.component';
import { DreamcatcherDetailComponent } from './collections/dreamcatcher-detail/dreamcatcher-detail.component';

import { WatchComponent } from './collections/watch/watch.component';
import { WatchDetailComponent } from './collections/watch-detail/watch-detail.component';

import { BraceletDetailComponent } from './jewelry/bracelet-detail/bracelet-detail.component';
import { PendantDetailComponent } from './jewelry/pendant-detail/pendant-detail.component';
import { EarringDetailComponent } from './jewelry/earring-detail/earring-detail.component';
import { DiamondDetailComponent } from './jewelry/diamond-detail/diamond-detail.component';
import { CharmringDetailComponent } from './jewelry/charmring-detail/charmring-detail.component';
import { PearlDetailComponent } from './jewelry/pearl-detail/pearl-detail.component';
import { RingsDetailComponent } from './jewelry/rings-detail/rings-detail.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/home',
    pathMatch:'full'
  },
  { path:'home',
    component:HomeComponent
  },
  {
    path:'',
    component:SelectionCriteriaComponent
  },
  {
    path:'',
    component:ThemsanphamComponent
  },
  {
    path:'wedding',
    component:WeddingComponent
  },
  {
    path:'wedding',
    children:[
      {
        path:'wedding-detail-1',
        component:WeddingDetailComponent
      },
      {
        path:'wedding-detail-2',
        component:WeddingDetailComponent
      },
      {
        path:'wedding-detail-3',
        component:WeddingDetailComponent
      },
      {
        path:'wedding-detail-4',
        component:WeddingDetailComponent
      },
      {
        path:'wedding-detail-5',
        component:WeddingDetailComponent
      },
      {
        path:'wedding-detail-6',
        component:WeddingDetailComponent
      },
      {
        path:'wedding-detail-7',
        component:WeddingDetailComponent
      },
      {
        path:'wedding-detail-8',
        component:WeddingDetailComponent
      },
      {
        path:'wedding-detail-9',
        component:WeddingDetailComponent
      },
      {
        path:'wedding-detail-10',
        component:WeddingDetailComponent
      },
      {
        path:'wedding-detail-11',
        component:WeddingDetailComponent
      },
      {
        path:'wedding-detail-12',
        component:WeddingDetailComponent
      },
      {
        path:'wedding-detail-13',
        component:WeddingDetailComponent
      },
      {
        path:'wedding-detail-14',
        component:WeddingDetailComponent
      },
      {
        path:'wedding-detail-15',
        component:WeddingDetailComponent
      },
      {
        path:'wedding-detail-16',
        component:WeddingDetailComponent
      },
      {
        path:'wedding-detail-17',
        component:WeddingDetailComponent
      },
      {
        path:'wedding-detail-18',
        component:WeddingDetailComponent
      },
      {
        path:'wedding-detail-19',
        component:WeddingDetailComponent
      },
      {
        path:'wedding-detail-20',
        component:WeddingDetailComponent
      }

    ]
  },
  {
    path:'chain',
    component:ChainComponent
  },
  {
    path:'chain',
    children:[
      {
        path:'detail-chain',
        component:ChainDetailComponent
      }
    ]
  },
  {
    path:'dreamcatcher',
    component:DreamcatcherComponent
  },
  {
    path:'dreamcatcher',
    children:[
      {
        path:'detail-dreamcatcher',
        component:DreamcatcherDetailComponent
      }
    ]
  },
  {
    path:'watch',
    component:WatchComponent
  },
  {
    path:'watch',
    children:[
      {
        path:'detail-watch',
        component:WatchDetailComponent
      }
    ]
  },
  {
    path:'bracelet',
    component:BraceletComponent
  },
  {
    path:'bracelet',
    children:[
      {
        path:'detail-bracelet',
        component:BraceletDetailComponent
      }
    ]
  },
  {
    path:'pendant',
    component:PendantComponent
  },
  {
    path:'pendant',
    children:[
      {
        path:'detail-pendants',
        component:PendantDetailComponent
      }
    ]
  },
  {
    path:'earrings',
    component:EarringsComponent
  },
  {
    path:'earrings',
    children:[
      {
        path:'detail-earrings',
        component:EarringDetailComponent
      }
    ]
  },
  {
    path:'diamonds',
    component:DiamondsComponent
  },
  {
    path:'diamonds',
    children:[
      {
        path:'detail-diamonds',
        component:DiamondDetailComponent
      }
    ]
  },
  {
    path:'charm-ring',
    component:CharmingComponent
  },
  {
    path:'charm-ring',
    children:[
      {
        path:'detail-charm-ring',
        component:CharmringDetailComponent
      }
    ]
  },
  {
    path:'pearls',
    component:PearlsComponent
  },
  {
    path:'pearls',
    children:[
      {
        path:'detail-pearls',
        component:PearlDetailComponent
      }
    ]
  },
  {
    path:'rings',
    component:RingsComponent
  },
  {
    path:'rings',
    children:[
      {
        path:'detail-rings',
        component:RingsDetailComponent
      }
    ]
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'contact',
    component:ContactComponent
  },
  {
    path:'sign-up',
    component:SignUpComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'cart',
    component:CartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
