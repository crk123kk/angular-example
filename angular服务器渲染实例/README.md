<p align="center">
  <img src="https://cloud.githubusercontent.com/assets/1016365/10639063/138338bc-7806-11e5-8057-d34c75f3cafc.png" alt="Universal Angular" height="200"/>
</p>

# Angular Universal Starter [![Universal Angular](https://img.shields.io/badge/universal-angular2-brightgreen.svg?style=flat)](https://github.com/angular/universal)

> Server-Side Rendering for Angular（服务端渲染的Angular应用）

### 构建时预渲染(prerender) Vs. 服务端渲染(ssr)

这个项目展示了两种不同形式的服务端渲染方式的使用。

**预渲染(prerender)** 

* 在应用构建时进行，根据路由生成对应的静态页面；
* 根据请求的网址由服务端返回对应的静态页面，不再动态渲染。

**服务端渲染(ssr)**

* 在应用运行时进行，页面动态渲染；
* 根据请求的网址实时由`ngExpressEngine`进行渲染并返回页面。

---

### 安装

* `npm install`

### 开发 (仅客户端渲染)

* 运行`npm run start`

### 生产 (也用于本地测试SSR/预渲染)

**`npm run ssr`** - 编译应用程序，并启动一个Node Express来为应用程序提供服务 `http://localhost:4000`。

**`npm run prerender`** - 编译应用程序并预​​渲染应用程序文件，启动一个演示http服务器，以便您可以查看它 `http://localhost:8080`

**注意**：要将静态网站部署到静态托管平台，您必须部署`dist/browser`文件夹, 而不是`dist`文件夹


## 一些陷阱

> 在Angular中构建Universal组件时，需要牢记几件事情。

 - 对于服务器软件包，您可能需要将第三方模块包含到`nodeExternals`白名单中

 - **`window`**, **`document`**, **`navigator`** 以及其它的浏览器类型 - _不存在于服务端_ - 如果你直接使用，在服务端将无法正常工作。 以下几种方法可以让你的代码正常工作：
 
    - 可以通过`PLATFORM_ID`标记注入的`Object`来检查当前平台是浏览器还是服务器，然后使用浏览器端特有的类型
    
    ```typescript
     import { PLATFORM_ID } from '@angular/core';
     import { isPlatformBrowser, isPlatformServer } from '@angular/common';
     
     constructor(@Inject(PLATFORM_ID) private platformId: Object) { ... }
     
     ngOnInit() {
       if (isPlatformBrowser(this.platformId)) {
          // 仅运行在浏览器端的代码
          ...
       }
       if (isPlatformServer(this.platformId)) {
         // 仅运行在服务端的代码
         ...
       }
     }
    ```
    
     - 尽量**限制**或**避免**使用`setTimeout`。它会减慢服务器端的渲染过程。确保在组件的`ngOnDestroy`中删除它们
     
     - 对于RxJs超时，请确保在成功时 _取消_ 它们的流，因为它们也会降低渲染速度。
   
 - **不要直接操作nativeElement**，使用[Renderer2](https://angular.io/api/core/Renderer2)，从而可以跨平台改变应用视图。
 
```typescript
constructor(element: ElementRef, renderer: Renderer2) {
  this.renderer.setStyle(element.nativeElement, 'font-size', 'x-large');
}
```

 - 解决应用程序在服务器上运行XHR请求，并在客户端再次运行的问题
    - 使用从服务器传输到客户端的缓存（TransferState）
 - 清楚了解与DOM相关的属性和属性之间的差异
 - 尽量让指令无状态。对于有状态指令，您可能需要提供一个属性，以反映相应属性的初始字符串值，例如img标签中的url。对于我们的native元素，src属性被反映为元素类型HTMLImageElement的src属性

# License
[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat)](/LICENSE)
