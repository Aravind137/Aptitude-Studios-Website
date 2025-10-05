import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CasinogamesComponent } from './casinogames/casinogames.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { CasinoDetailsPageComponent } from './casino-details-page/casino-details-page.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { WebDevelopmentComponent } from './web-development/web-development.component';
import { MobileAppDevComponent } from './mobile-app-dev/mobile-app-dev.component';
import { GamedevComponent } from './gamedev/gamedev.component';
import { NftDevelopmentComponent } from './nft-development/nft-development.component';
import { GamesComponent } from './games/games.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { MetaverseMetahumansComponent } from './metaverse-metahumans/metaverse-metahumans.component';
import { MobileappWebdevComponent } from './mobileapp-webdev/mobileapp-webdev.component';
import { ServiceComponent } from './service/service.component';
import { CareerComponent } from './career/career.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { LocationStrategy, HashLocationStrategy, PathLocationStrategy } from '@angular/common';
import { environment } from 'src/environments/environment';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { Analytics, getAnalytics, provideAnalytics } from '@angular/fire/analytics';
import { GoogleMapComponent } from './google-map/google-map.component';
import { HomeComponent } from './home/home.component';
import { PrivacyPolicyPlaystoreComponent } from './privacy-policy-playstore/privacy-policy-playstore.component';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
import { UnitygamesComponent } from './unitygames/unitygames.component';
import { ArVrGamesComponent } from './ar-vr-games/ar-vr-games.component';
import { UnrealGameEngineComponent } from './unreal-game-engine/unreal-game-engine.component';
import { Play2earnBlockchainComponent } from './play2earn-blockchain/play2earn-blockchain.component';
import { MetaverseBlockchainComponent } from './metaverse-blockchain/metaverse-blockchain.component';
import { MultiplayerGamesComponent } from './multiplayer-games/multiplayer-games.component';
import { MobileAppDevelopmentComponent } from './mobile-app-development/mobile-app-development.component';
import { WebDevComponent } from './web-dev/web-dev.component';
import { OnlineCasinoPortalComponent } from './online-casino-portal/online-casino-portal.component';
import { CasinoSoftwareComponent } from './casino-software/casino-software.component';
import { FantansySportsAppComponent } from './fantansy-sports-app/fantansy-sports-app.component';
import { PaymentGatewayIntegrationComponent } from './payment-gateway-integration/payment-gateway-integration.component';
import { CasinoApiIntegrationsComponent } from './casino-api-integrations/casino-api-integrations.component';
import { RngCertificateComponent } from './rng-certificate/rng-certificate.component';
import { MetaverseGamingComponent } from './metaverse-gaming/metaverse-gaming.component';
import { MetaverseWorldCreationComponent } from './metaverse-world-creation/metaverse-world-creation.component';
import { MetahumanDevelopmentsComponent } from './metahuman-developments/metahuman-developments.component';
import { NftComponent } from './nft/nft.component';
import { NftBlockchainComponent } from './nft-blockchain/nft-blockchain.component';
import { ProductDevelopmentsComponent } from './product-developments/product-developments.component';
import { LanguagesComponent } from './languages/languages.component';
import { ExchangesWalletDevelopComponent } from './exchanges-wallet-develop/exchanges-wallet-develop.component';

@NgModule({
  declarations: [
    AppComponent,
    CasinogamesComponent,
    NotfoundComponent,
    CasinoDetailsPageComponent,
    ContactUsComponent,
    WebDevelopmentComponent,
    MobileAppDevComponent,
    GamedevComponent,
    NftDevelopmentComponent,
    GamesComponent,
    AboutUsComponent,
    PrivacyPolicyComponent,
    MetaverseMetahumansComponent,
    MobileappWebdevComponent,
    ServiceComponent,
    CareerComponent,
    GoogleMapComponent,
    HomeComponent,
    PrivacyPolicyPlaystoreComponent,
    TermsAndConditionsComponent,
    UnitygamesComponent,
    ArVrGamesComponent,
    UnrealGameEngineComponent,
    Play2earnBlockchainComponent,
    MetaverseBlockchainComponent,
    MultiplayerGamesComponent,
    MobileAppDevelopmentComponent,
    WebDevComponent,
    OnlineCasinoPortalComponent,
    CasinoSoftwareComponent,
    FantansySportsAppComponent,
    PaymentGatewayIntegrationComponent,
    CasinoApiIntegrationsComponent,
    RngCertificateComponent,
    MetaverseGamingComponent,
    MetaverseWorldCreationComponent,
    MetahumanDevelopmentsComponent,
    NftComponent,
    NftBlockchainComponent,
    ProductDevelopmentsComponent,
    LanguagesComponent,
    ExchangesWalletDevelopComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAnalytics(() => getAnalytics()),
  ],
  providers: [{ provide: LocationStrategy, useClass: PathLocationStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule { }
