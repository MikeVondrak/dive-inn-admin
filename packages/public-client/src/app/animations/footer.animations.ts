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
  keyframes,
} from '@angular/animations';

// https://www.techiediaries.com/angular-router-animations/

const animationTime = '1.00s';

const footerInPlaceStyle = style({
  opacity: 1,
  //transform: 'translateY(0%)',
});
const footerTransitioningStyle = style({
  opacity: 0,
  //transform: 'translateY(0%)',
});

const footerTransitionKeyframes = [
  style({ offset: 0.00, width: '100%', opacity: 0, transform: 'translateY(0%)' }),
  //style({ offset: 0.01, width: '100%', opacity: 1, transform: 'translateY(0%)' }),
  //style({ offset: 0.20, width: '100%', opacity: 1, transform: 'translateY(0%)' }),
  style({ offset: 1.00, width: '100%', opacity: 1, transform: 'translateY(0%)' })
];
const footerTransitionKeyframes2 = [
  style({ offset: 0.00, width: '100%', opacity: 0, transform: 'translateY(0%)' }),
  //style({ offset: 0.20, width: '100%', opacity: 1, transform: 'translateY(0%)' }),
  style({ offset: 1.00, width: '100%', opacity: 1, transform: 'translateY(0%)' })
];

export const footerAnimations = [
  trigger('footerAnimationTrigger', [
    state('stopped', footerInPlaceStyle),
    state('animating', footerTransitioningStyle),
    transition('stopped => animating', [
      animate(`${animationTime} ease`, keyframes(footerTransitionKeyframes))
    ]),
    transition('animating => stopped', [
      animate(`${animationTime} ease`, keyframes(footerTransitionKeyframes2))
    ]),
  ]),
];
