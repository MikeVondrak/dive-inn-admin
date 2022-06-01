import {
  animation,
  style,
  animate,
  trigger,
  transition,
  useAnimation,
  state,
  query,
  stagger,
  group,
  sequence,
  animateChild,
} from '@angular/animations';

// https://www.techiediaries.com/angular-router-animations/

// const routeAnimationTime = '1.5s';
// const routeAnimationDelay = '.20s';
// const routeAnimationDelay2 = '.70s';
// const scaleDownVal = 0.90;

// const baseRouteStyles = { position: 'absolute' };

// export const routeAnimations = [
//   trigger('routeAnimationTrigger', [
//     transition('* => *', [
//       query('.site-page', [style(baseRouteStyles)], { optional: true }),
//       //query('.site-page:enter', [style(baseRouteStyles)], { optional: true }),
//       group([
//         query(
//           '.site-page:leave',
//           [
//             style({ opacity: 1, transform: 'scale(1)' }),
//             animate(`${routeAnimationTime} ${routeAnimationDelay} ease-in-out`, 
//               style({ ...baseRouteStyles, transform: `scale(${scaleDownVal})` })),
//           ],
//           { optional: true }
//         ),
//         query(
//           '.site-page:enter',
//           [
//             style({ opacity: 0, transform: `scale(${scaleDownVal})` }),
//             animate(`${routeAnimationTime} ${routeAnimationDelay2} ease-in-out`, 
//               style({ ...baseRouteStyles, transform: 'scale(1)' })),
//           ],
//           { optional: true }
//         ),
//       ]),      
//     ]),
//   ])
//   ];

export const routeAnimations = [
  trigger('routeAnimationTrigger', [
    transition('* => *', [
      query(':enter, :leave', [style({ position: 'absolute', width: '100vw' })], { optional: true }),
      query(':enter', [style({ opacity: 0 })], { optional: true }),
      group([
        query(
          ':leave',
          [
            style({ opacity: 1, transform: 'scale(1)' }),
            animate('1s ease-in-out', style({ opacity: 0, transform: 'scale(0.85)' })),
          ],
          { optional: true }
        ),
        query(
          ':enter',
          [
            style({ opacity: 0, transform: 'scale(0.85)' }),
            animate('1s 2s ease-in-out', style({ opacity: 1, transform: 'scale(1)' })),
          ],
          { optional: true }
        ),
      ]),
    ]),
  ]),
];