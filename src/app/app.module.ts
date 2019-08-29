import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { SelectionCriteriaComponent } from './selection-criteria/selection-criteria.component';
import { ThemsanphamComponent } from './themsanpham/themsanpham.component';



import { BraceletComponent } from './jewelry/bracelet/bracelet.component';
import { PendantComponent } from './jewelry/pendant/pendant.component';
import { EarringsComponent } from './jewelry/earrings/earrings.component';
import { DiamondsComponent } from './jewelry/diamonds/diamonds.component';
import { CharmingComponent } from './jewelry/charming/charming.component';
import { PearlsComponent } from './jewelry/pearls/pearls.component';
import { RingsComponent } from './jewelry/rings/rings.component';


import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';

import { WeddingComponent } from './collections/wedding/wedding.component';
import { WeddingDetailComponent } from './collections/wedding-detail/wedding-detail.component';
import { ChainComponent } from './collections/chain/chain.component';
import { DreamcatcherComponent } from './collections/dreamcatcher/dreamcatcher.component';
import { WatchComponent } from './collections/watch/watch.component';
import { ChainDetailComponent } from './collections/chain-detail/chain-detail.component';
import { DreamcatcherDetailComponent } from './collections/dreamcatcher-detail/dreamcatcher-detail.component';
import { WatchDetailComponent } from './collections/watch-detail/watch-detail.component';

import { BraceletDetailComponent } from './jewelry/bracelet-detail/bracelet-detail.component';
import { PendantDetailComponent } from './jewelry/pendant-detail/pendant-detail.component';
import { EarringDetailComponent } from './jewelry/earring-detail/earring-detail.component';
import { DiamondDetailComponent } from './jewelry/diamond-detail/diamond-detail.component';
import { CharmringDetailComponent } from './jewelry/charmring-detail/charmring-detail.component';
import { PearlDetailComponent } from './jewelry/pearl-detail/pearl-detail.component';
import { RingsDetailComponent } from './jewelry/rings-detail/rings-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,

    ContactComponent,

    BraceletComponent,
    PendantComponent,
    EarringsComponent,
    DiamondsComponent,
    PearlsComponent,
    RingsComponent,

    SelectionCriteriaComponent,
    ThemsanphamComponent,

    AboutComponent,
    SignUpComponent,
    LoginComponent,
    CartComponent,

    WeddingComponent,
    WeddingDetailComponent,
    ChainComponent,
    DreamcatcherComponent,
    ChainDetailComponent,
    DreamcatcherDetailComponent,
    WatchDetailComponent,
    WatchComponent,

    BraceletDetailComponent,
    PendantDetailComponent,
    EarringDetailComponent,
    DiamondDetailComponent,
    CharmringDetailComponent,
    PearlDetailComponent,
    RingsDetailComponent,
    CharmingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
