import { animate, keyframes, state, style, transition, trigger } from "@angular/animations";

const fillUpKeyframes = [
  style({
    offset: 0,
    transform: 'translateY(100%)',
  }),
  style({
    offset: 1,
    transform: 'translateY(0%)',
  })
];
const fillDownKeyframes = [
  style({
    offset: 0,
    transform: 'translateY(0%)',
  }),
  style({
    offset: 1,
    transform: 'translateY(100%)',
  })
];


const fillHorizontalKeyframes = [
  style({
    offset: 0,
    transform: 'translateX(100%)',
  }),
  style({
    offset: 1,
    transform: 'translateX(0%)',
  })
];


export const PageSelectAnimation = [
  trigger('fillVerticalTransition', [
    state('unfilled', style({ transform: 'translateY(100%)' })),
    state('filled', style({ transform: 'translateY(0%)' })),
    transition('filled => unfilled', animate('0.5s ease-in-out', keyframes(fillDownKeyframes))),
    transition('unfilled => filled', animate('0.5s 0.05s ease-in-out', keyframes(fillUpKeyframes))),
  ]),
]

// export const PageUnselectAnimation = [
  
//     trigger('unfillDownTransition', [
//       state('filled', style({ transform: 'rotateX(180deg)', boxShadow: '-1px -1px 4px 0px black' })),
//       state('unfilled', style({ transform: 'rotateX(0deg)'})), //boxShadow: '1px 1px 4px 0px black' })),
//       transition('filled => unfilled', animate('0.6s ease', keyframes(verticalUnflipKeyframes))),
//       transition('faceUp => faceDown', animate('0.6s ease', keyframes(verticalFlipKeyframes))),
//     ]),
// ]