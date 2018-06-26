import { animate, state, style, transition, trigger, keyframes, query, stagger } from '@angular/animations';

// Component transition animations
export const flyInOut =
    trigger('flyInOut', [
        state('in', style({height:'0'})),
        state('out', style({height:'100px'})),
        // transition('void => *', [ // 进场动画
        //     animate(2000, keyframes([
        //         style({ height: '0', opacity: 0, offset: 0 }), // 元素高度0，元素隐藏(透明度为0)，动画帧在0%
        //         style({ height: '*', opacity: 1, offset: 1 }) // 200ms后高度自适应展开，元素展开(透明度为1)，动画帧在100%
        //     ]))
        // ]),
        transition('in => out', [ // 离场场动画(ps.其实这个叫离场场动画是不合适的，应该说是从in状态到out状态变化时的转场)
            animate(2000, keyframes([
                style({ height: '0', opacity: 0, offset: 0, display:'block' }), // 元素高度0，元素隐藏(透明度为0)，动画帧在0%
                style({ height: '*', opacity: 1, offset: 1, display:'none'  }) // 200ms后高度自适应展开，元素展开(透明度为1)，动画帧在100%
            ]))
        ]),
        // transition('* => void', [ //离场动画
        //     animate(2000, keyframes([
        //         style({ height: '*', opacity: 1, offset: 0 }), // 与之对应，让元素从显示到隐藏一个过渡
        //         style({ height: '0', opacity: 0, offset: 1 })
        //     ]))
        // ]),
        transition('out => in', [ // 进场动画(ps.同上，这个应该叫从out到in的转场比较合适)
            animate(2000, keyframes([
                style({ height: '*', opacity: 1, offset: 0 }), // 与之对应，让元素从显示到隐藏一个过渡
                style({ height: '0', opacity: 0, offset: 1 })
            ]))
        ]),
    ])
/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/