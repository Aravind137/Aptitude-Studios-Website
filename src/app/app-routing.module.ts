import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { CareerComponent } from './career/career.component';
import { CasinoDetailsPageComponent } from './casino-details-page/casino-details-page.component';
import { CasinogamesComponent } from './casinogames/casinogames.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { GamedevComponent } from './gamedev/gamedev.component';
import { GamesComponent } from './games/games.component';
import { HomeComponent } from './home/home.component';
import { MetaverseMetahumansComponent } from './metaverse-metahumans/metaverse-metahumans.component';
import { MobileAppDevComponent } from './mobile-app-dev/mobile-app-dev.component';
import { MobileappWebdevComponent } from './mobileapp-webdev/mobileapp-webdev.component';
import { NftDevelopmentComponent } from './nft-development/nft-development.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { ServiceComponent } from './service/service.component';
import { WebDevelopmentComponent } from './web-development/web-development.component';
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
import { path } from 'animejs';
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

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    // pathMatch: 'full',
    // redirectTo: 'home'
  },
  {
    path: 'home',
    pathMatch: 'full',
    redirectTo: ''
    // component: HomeComponent,
  },
  // {
  //   path: 'casino/:id',
  //   component: CasinogamesComponent
  // },
  {
    path: 'casino-details',
    component: CasinoDetailsPageComponent
  },
  // Redirect casino routes to home
  {
    path: 'casino',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: 'casino/:id',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: 'herosection',
    component: CasinogamesComponent
  },
  {
    path: 'casino/herosection',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: 'games',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: 'contact-us',
    component: ContactUsComponent
  },
  {
    path: 'mobile-application',
    component: MobileAppDevComponent
  },
  {
    path: 'games-development',
    component: GamedevComponent
  },
  {
    path: 'websites-development',
    component: WebDevelopmentComponent
  },
  {
    path: 'nft/:id',
    component: NftDevelopmentComponent
  },
  {
    path: 'games/:id',
    component: GamesComponent
  },
  {
    path: 'service',
    component: ServiceComponent
  },
  {
    path: 'about-us',
    component: AboutUsComponent
  },
  {
    path: 'privacy-policy',
    component: PrivacyPolicyComponent
  },
  {
    path: 'metaverse-metahumans/:id',
    component: MetaverseMetahumansComponent
  },
  {
    path: 'mobileapp-webdev/:id',
    component: MobileappWebdevComponent,
  },
  {
    path: 'career',
    component: CareerComponent,
  },
  {
    path: 'privacy-policy-playstore',
    component: PrivacyPolicyPlaystoreComponent,
  },
  {
    path: 'terms-and-conditions',
    component: TermsAndConditionsComponent,
  },
  {
    path:'unity-games',
    component: UnitygamesComponent
  },
  {
path:'ar-vr-games',
component: ArVrGamesComponent
  },
  {
    path:'unreal-game-engine',
    component:UnrealGameEngineComponent
  },
  // {
  //   path:'play2earn-blockchain',
  //   component:Play2earnBlockchainComponent
  // },
  {
    path:'metaverse-blockchain',
    component:MetaverseBlockchainComponent
  },
  {
    path:'multiplayer-games',
    component:MultiplayerGamesComponent
  },
  {
    path:'mobile-app-development',
    component:MobileAppDevelopmentComponent
  },
  {
path:'web-dev',
component:WebDevComponent
  },
  // {
  // path:'online-casino-portal',
  // component:OnlineCasinoPortalComponent
  // },
// {
//   path:'casino-software',
//   component:CasinoSoftwareComponent
// },
// {
//   path:'fantasy-sports-app',
//   component:FantansySportsAppComponent
// },
// {
//   path:'payment-gateway-integration',
//   component:PaymentGatewayIntegrationComponent
// },
  // {
  // path:'casino-api-integrations',
  // component:CasinoApiIntegrationsComponent
  // },
  // New Esports Routes
  {
    path:'esports-tournament-platforms',
    component:OnlineCasinoPortalComponent
  },
  {
    path:'team-player-management',
    component:CasinoSoftwareComponent
  },
  {
    path:'matchmaking-leaderboards',
    component:FantansySportsAppComponent
  },
  {
    path:'live-streaming-api',
    component:PaymentGatewayIntegrationComponent
  },
  {
    path:'esports-mobile-app',
    component:CasinoApiIntegrationsComponent
  },
  {
    path:'analytics-performance',
    component:RngCertificateComponent
  },
// {
//   path:'rng-certificate',
//   component:RngCertificateComponent
// },
{
  path:'metaverse-gaming',
  component:MetaverseGamingComponent
},
{
  path:'metaverse-world-creation',
  component:MetaverseWorldCreationComponent
},
{
  path:'metahuman-developments',
  component:MetahumanDevelopmentsComponent
},
{
  path:'nft',
  component:NftComponent
},
{
  path:'nft-blockchain',
  component:NftBlockchainComponent
},
{
  path:'product-developments',
  component:ProductDevelopmentsComponent
},
{
  path:'languages',
  component:LanguagesComponent
},
{
  path:'exchanges-wallet-develop',
  component:ExchangesWalletDevelopComponent
},
  {
    path: '**',
    component: NotfoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'top',useHash: false})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
