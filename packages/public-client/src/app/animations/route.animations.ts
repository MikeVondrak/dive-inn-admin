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

const routeAnimationTime = '1.5s';
const routeAnimationDelay = '0.50s';
const routeAnimationDelay2 = '0.70s';
const scaleDownVal = 1.00;

export const routeAnimations = [
  trigger('routeAnimationTrigger', [
    transition('* => *', [
      query('.site-page:enter, .site-page:leave', [style({positon: 'absolute', overflow: 'hidden'})], { optional: true }),
      query('.site-page:enter', [style({ position: 'absolute', opacity: 0 })], { optional: true }),
      group([
        query(
          '.site-page:leave',
          [
            style({ position: 'absolute', opacity: 1, transform: 'scale(1)' }),
            animate(`${routeAnimationTime} ${routeAnimationDelay} ease-in-out`, style({ position: 'absolute', opacity: 0, transform: `scale(${scaleDownVal})` })),
          ],
          { optional: true }
        ),
        query(
          '.site-page:enter',
          [
            style({ position: 'absolute', opacity: 0, transform: `scale(${scaleDownVal})` }),
            animate(`${routeAnimationTime} ${routeAnimationDelay2} ease-in-out`, style({ position: 'absolute', opacity: 1, transform: 'scale(1)' })),
          ],
          { optional: true }
        ),
      ]),
    ]),
  ])
];
