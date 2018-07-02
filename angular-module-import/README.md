### 项目介绍
关于angular模块的引入


### 启动
npm install 
npm run start --4200

### 知识点包括
将不同的组件引入一个模块中，然后引入这个模块

### 需要注意的是
将很多公用组件当做一个模块引出的时候，不仅要在这个模块中引入import这些组件，
还要在这个模块中导出export这些组件。
并且需要注意的是，导出的组件只是外部引用这个模块的组件，也就是说，我外部只会调用到你这个模块的self-module组件
因此只需要导出export这个SelfModuleComponent组件，而SelfComponent1Component并没有在模块之外调用，只有在
SelfModuleComponent组件中被调用，所以不算模块之外被调用，所以不需要导出。

exports: [
    SelfModuleComponent
],
declarations: [
    SelfModuleComponent,
    SelfComponent1Component,
    SelfComponent2Component
],