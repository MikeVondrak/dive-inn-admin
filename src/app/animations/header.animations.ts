import { animation, style, animate, trigger, transition, useAnimation, state, keyframes, group, query } from '@angular/animations';

const notAllowedStyle = style({
  //width: '100%',
  top: '0',
  left: '50%',
  transform: 'translateX(-50%)',
});
const allowedStyle = style({
  top: '0',
  left: '1rem',
  transform: 'translateX(-50%)',
  // width: '120px',
  //transform: 'translateX(-50%)',
});

export const headerAnimations = [
  trigger('headerTransitions', [
    //state('notAllowed', style({})),
    //state('allowed', style({})),
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