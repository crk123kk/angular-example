import { animate, state, style, transition, trigger, query, stagger, keyframes } from '@angular/animations';

// Component transition animations
export const listAnimation =
trigger('listAnimation', [
    transition('* => *', [ // each time the binding value changes
      query(':leave', [
        stagger(300, [
            animate(800, keyframes([
                style({opacity: 1, transform: 'translateX(0)',     offset: 0}),
                style({opacity: 1, transform: 'translateX(-15px)', offset: 0.7}),
                style({opacity: 0, transform: 'translateX(100%)',  offset: 1.0})
                // style({opacity: 1, transform: 'translateX(0)',     offset: 0}),
                // style({opacity: 1, transform: 'translateX(-15px)', offset: 0.7}),
                // style({opacity: 0, transform: 'translateX(100%)',  offset: 1.0})
            ]))
        ])
      ],{ optional: true }),
      query(':enter', [
        style({ opacity: 0 }),
        stagger(300, [
            animate(800, keyframes([ // 回弹的效果
                style({opacity: 0, transform: 'translateX(-100%)', offset: 0}),
                style({opacity: 1, transform: 'translateX(15px)',  offset: 0.3}),
                style({opacity: 1, transform: 'translateX(0)',     offset: 1.0})
            ]))
        ])
      ],{ optional: true })
    ])
  ]);


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/