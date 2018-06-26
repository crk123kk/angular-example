import { animate, state, style, transition, trigger } from '@angular/animations';

// Component transition animations
export const slideInDownAnimation =
  trigger('slideInDownAnimation', [
    state('*',
      style({
        opacity: 1,
        transform: 'translateX(0)'
      })
    ),
    state('show',
      style({
        opacity: 1,
        transform: 'translateX(0)'
      })
    ),
    state('hidden',
      style({
        opacity: 0,
        transform: 'translateX(0)'
      })
    ),
    // transition(':enter', [
    //   style({
    //     opacity: 0,
    //     transform: 'translateY(100%)'
    //   }),
    //   animate('0.2s ease-in')
    // ]),
    // transition(':leave', [
    //   animate('0.5s ease-out', style({
    //     opacity: 0,
    //     transform: 'translateX(-100%)'
    //   }))
    // ])
    transition('show => hidden', [
        // style({
        //   opacity: 0,
        //   transform: 'translateY(100%)'
        // }),
        animate('1s ease-in')
      ]),
      transition('hidden => show', [
        animate('1s ease-out'
        // style({
        //   opacity: 0,
        //   transform: 'translateX(-100%)'
        // })
        )
      ])
  ]);


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/