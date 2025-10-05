import { Component, OnInit } from '@angular/core';
import { Analytics, logEvent } from '@angular/fire/analytics';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-casino-details-page',
  templateUrl: './casino-details-page.component.html',
  styleUrls: ['./casino-details-page.component.scss'],
})
export class CasinoDetailsPageComponent implements OnInit {
  cardInfomations = [
    {
      heading: 'Rummy',
      image: 'assets/images/CasinoCards/rummy.png',
      paragraph:
        'Aptitude Studios is a ready to launch online 13 card Indian rummy business in a short time in all portals. The portal offers a full suite of tools and features for successfully operating and maintaining an online rummy website; from creating marketing campaigns to attract new players; from player registration to user management, payment gateways to content management, agent management to affiliate management.',
      subHeading: 'Advantages',
      list: [
        'Ready-to-use casino software in all platforms can be implemented for short period of time.',
        'Provide Tested and proven games.',
        'Produce fully customizable product to fit clients needs at an affordable price.',
      ],
    },
    {
      heading: 'Teenpatti',
      image: 'assets/images/CasinoCards/teenpatti.png',
      paragraph:
        'Aptitude Studios is a ready to launch Teenpatti (Indian flush) in a short time in all portals. The portal offers a full suite of tools and features for successfully operating and maintaining a website; from creating marketing campaigns to attract new players; from player registration to user management, payment gateways to content management, agent management to affiliate management.',
      subHeading: 'Advantages',
      list: [
        'Capable of producing software in all platforms for short implementation time.',
        'Tested and proven games.',
        'Fully customizable product are provided to fit clients needs at an affordable price.',
      ],
    },
    {
      heading: 'PUBG',
      image: 'assets/images/PubG.png',
      paragraph:
        'Aptitude Studios has demonstrated proven expertise in capturing audiences in highly competitive gaming markets with its specialized support for PUBG communities worldwide. From Europe to Asia, the studio adapts its services to meet the preferences of local players, ensuring compliance with each region’s gaming standards and regulations. By customizing experiences such as regional events, in-game rewards, and tailored gameplay modes, Aptitude Studios continues to be the preferred partner for PUBG enthusiasts as the game expands to new territories. Additionally, Aptitude Studios has designed unique PUBG offerings for the Asian market, delivering specialized packages that feature competitive tournaments, seasonal battle passes, and community-driven events. With multi-language support and localization across a wide range of dialects, the studio ensures that players everywhere can enjoy a seamless, engaging, and immersive PUBG experience.',
      subHeading: 'Advantages',
      list: [
        'Production of software in all platforms for short implementation time.',
        'We provide Tested and proven games to users.',
        'Customized products are provided to fit clients needs at an affordable price.',
      ],
    },
    {
      heading: 'Spin To Win',
      image: 'assets/images/CasinoCards/spintowin.png',
      paragraph:
        'Aptitude Studios is a ready to launch Spin to Win slot gamesWith Great Day Games new online slot maching game, Spin To Win will entrance you with its spinning wheel and lucky buttons, bells and whistles. Play slots online today and learn what it means to truly Spin and Win!',
      subHeading: 'Advantages',
      list: [
        'Ready-to-use casino software in all platforms can be implemented for short period of time.',
        'Provide Tested and proven games.',
        'Produce fully customizable product to fit clients needs at an affordable price.',
      ],
    },
    {
      heading: 'Counter-Strike 2',
      image: 'assets/images/cs 2.png',
      paragraph:
        'Aptitude Studios is prepared with ready-to-launch Counter-Strike 2 solutions. CS2 is an iconic first-person shooter — the ultimate test of skill, reflex, and tactical teamwork. It’s not only about quick reactions, but also about careful planning, patience, and precision. Remember, the goal of Counter-Strike 2 is not just to eliminate opponents, but to outthink, outmaneuver, and dominate the battlefield in competitive play!',
      subHeading: 'Advantages',
      list: [
        'Ready-to-use multiplayer FPS software across all platforms, deployable in a short period of time.',
        'Provide tested and proven competitive gameplay mechanics, ensuring smooth performance and global recognition.',
        'Deliver fully customizable solutions including maps, tournaments, and in-game features tailored to client and player needs at an affordable price.',
      ],
    },
    {
      heading: 'Clash Royale',
      image: 'assets/images/CR.png',
      paragraph:
        'Aptitude Studios is ready to launch Clash Royale solutions. Few mobile strategy games are as engaging, competitive, and rewarding as Clash Royale. This thrilling real-time battle game has captured the attention of millions of players worldwide and remains one of the top-ranking titles in the mobile esports and gaming industry.',
      subHeading: 'Advantages',
      list: [
        'Ready-to-use Clash Royale software and tournament platforms across all devices, deployable in a short period of time.',
        'Provide tested and proven gameplay systems, ensuring smooth performance and a globally recognized experience.',
        'Deliver fully customizable products including in-game events, tournaments, and rewards tailored to client and player needs at an affordable price.',
      ],
    },
    {
      heading: 'Bingo',
      image: 'assets/images/CasinoCards/bingo.png',
      paragraph:
        'Aptitude Studios is a ready to launch Bingo in a short time in all portals. The portal offers a full suite of tools and features for successfully operating and maintaining a website; from creating marketing campaigns to attract new players; from player registration to user management, payment gateways to content management, agent management to affiliate management.',
      subHeading: 'Advantages',
      list: [
        'Softwares are produced with all platforms for short implementation time.',
        'Tested and proven games are presented to the users.',
        'To fit clients needs customized products are provided at an affordable price.',
      ],
    },
    {
      heading: 'Social Media',
      image: 'assets/images/CasinoCards/socialmedia.png',
      paragraph:
        'Aptitude Studios believes that the business potential of gaming through social media is huge. Millions of people log in to their accounts to communicate and seek entertainment. Aptitude Studios casuals and casino games customization features, different modes and, of course, the ability to connect with friends and meet new people while enjoying the game.',
      subHeading: 'Advantages',
      list: [
        'Softwares in all platforms for short implementation time.',
        'Tested and proven games are presented.',
        'Clients needs are fitted with the customized products and provided at an affordable price.',
      ],
    },
    {
      heading: 'Kiosk Machine',
      image: 'assets/images/CasinoCards/kioskmachine.png',
      paragraph:
        'Aptitude Studios is the one of the best companies that manufacturing kiosk machines for clients requirement. We do customize kiosk for all types of games in affordable price.',
      subHeading: 'Advantages',
      list: [
        'Softwares in all platforms are implemented in the machine for implementation time given by the client.',
        'Tested and proven games are presented.',
        'Clients needs are fitted with the customized products and provided at an affordable price.',
      ],
    },
  ];
  id!: any;
  card: any;
  sub: any;
  constructor(private _ac:ActivatedRoute, private analytics: Analytics) {
  }
  
  ngOnInit(): void {
    logEvent(this.analytics, 'Casino_Details_Page')
    this.sub = this._ac.queryParams.subscribe((id) => {
      this.id = id;
      console.log(this.id)
      this.card = this.cardInfomations[this.id['id']] || 0
    });
  }
  ngDestroy() {
    this.sub.unsubscribe();
  }
}
