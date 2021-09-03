import { animation, style, animate, trigger, transition, useAnimation, state, keyframes, group, query } from '@angular/animations';

const notAllowedStyle = style({
  top: '0',
  left: '50%',
  transform: 'translateX(-50%)',
});
const allowedStyle = style({
  top: '0',
  left: '0',
  transform: 'translateX(0%)',
  width: '220px',
});

export const headerAnimations = [
  trigger('headerTransitions', [
    state('notAllowed', style({
      left: '50%',
      top: '400px',
      transform: 'translateX(-50%)',
      opacity: 1
    })),
    state('allowed', style({
      left: '50%',
      top: '440px',
      transform: 'translateX(-50%)',
      opacity: 0
    })),
    transition('* <=> *', animate('1s ease-in-out'))
    //transition('void => *', animate('10s ease-in-out')),
    // transition('notAllowed <=> allowed', [
    //   query('img', animate('1s ease-in-out', style({ width: '120px' })))
    // ])
  ]),
  trigger('logoTransitions', [
    state('*', notAllowedStyle),
    state('notAllowed', notAllowedStyle),
    state('allowed', allowedStyle),
    transition('* => *', animate('1s ease-in-out')),
    transition('notAllowed <=> allowed', animate('1s ease-in-out'))
  ])
];