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

const routeAnimationTime = '0.25s';
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
            animate(`${routeAnimationTime} ease-in-out`, style({ opacity: 0, transform: 'scale(0.85)' })),
          ],
          { optional: true }
        ),
        query(
          ':enter',
          [
            style({ opacity: 0, transform: 'scale(0.85)' }),
            animate(`${routeAnimationTime} ${routeAnimationTime} ease-in-out`, style({ opacity: 1, transform: 'scale(1)' })),
          ],
          { optional: true }
        ),
      ]),
    ]),
  ]),
];
