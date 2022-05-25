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
} from '@angular/animations';

// https://www.techiediaries.com/angular-router-animations/

const routeAnimationTime = '0.5s';
const routeAnimationDelay = '0.20s';
const routeAnimationDelay2 = '0.70s';
const scaleDownVal = 0.99;

export const routeAnimations = [
  trigger('routeAnimationTrigger', [
    transition('* => *', [
      query(':enter, :leave', [style({positon: 'absolute', overflow: 'hidden'})], { optional: true }),
      query(':enter', [style({ position: 'relative', opacity: 0 })], { optional: true }),
      group([
        query(
          ':leave',
          [
            style({ opacity: 1, transform: 'scale(1)', height: '*' }),
            animate(`${routeAnimationTime} ${routeAnimationDelay} ease-in-out`, style({ opacity: 1, transform: `scale(${scaleDownVal})`, height: '0' })),
          ],
          { optional: true }
        ),
        query(
          ':enter',
          [
            style({ opacity: 1, transform: `scale(${scaleDownVal})`, height: '0' }),
            animate(`${routeAnimationTime} ${routeAnimationDelay2} ease-in-out`, style({ opacity: 1, transform: 'scale(1)', height: '*' })),
          ],
          { optional: true }
        ),
      ]),
    ]),
  ]),
];
