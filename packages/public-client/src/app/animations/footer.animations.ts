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

const footerInPlaceStyle = style({
  opacity: 1,
  transform: 'translateY(0%)',

});
const footerTransitioningStyle = style({
  opacity: 0,
  transform: 'translateY(20%)',
  position: 'fixed',
});


const animationTime = '0.25s';
export const footerAnimations = [
  trigger('footerAnimationTrigger', [
    state('stopped',footerInPlaceStyle),
    state('animating', footerTransitioningStyle),
    transition('* => *', [
      animate(`${animationTime} ease`)
    ]),
  ]),
];
