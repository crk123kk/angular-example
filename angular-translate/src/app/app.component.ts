import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  lang = 'en'
  // constructor(private translate: TranslateService) {
  //   //添加语言支持
  //   translate.addLangs(['zh_cn', 'en']);
  //   //设置默认语言，一般在无法匹配的时候使用
  //   translate.setDefaultLang('zh_cn');
    
  //   //获取当前浏览器环境的语言比如en、 zh
  //   //translate.use('zh');    // 启用语言,即使用什么语言来翻译
  //   let broswerLang = translate.getBrowserLang();
  //   translate.use(broswerLang.match(/en|zh_cn/) ? broswerLang : 'zh_cn');
  // }
  constructor(
    private translate: TranslateService
  ){
    this.translate.use('en');
  }

  changeLang(value){
    console.log(value);
    if(this.lang == 'en'){
      this.translate.use('en');
    }else {
      this.translate.use('zh_cn');
    }
  }


}
