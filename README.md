**本项目纯属学习使用，不可用作商业行为  
任何违法违规造成的问题与本人无关  
如果问题可联系本人进行删除**

# 使用说明
只针对安卓手机的美团买菜  
可以参考源码自行拓展 叮咚买菜 盒马 每日有限等

# 小白用apk版本
1.下载apk并安装 https://raw.githubusercontent.com/JiajunJiang/RobFood/main/Release/%E7%BE%8E%E5%9B%A2%E4%B9%B0%E8%8F%9C%E5%8A%A9%E6%89%8B_v1.0.0.apk  
2.美团买菜添加好需要的物资 并切换到购物车界面  
3.启动本软件 并开启无障碍模式  
4.等待付款  

## APK测试方案
可以先定位一个北京的地址  
添加几样东西测试一下   
看看能不能成功付款并跳转到付款界面

# 程序员源码使用版本
主要依赖于 AutoJsPro 开发 https://pro.autojs.org/  
相关调试文档可参考 https://pro.autojs.org/docs/#/zh-cn/?id=%e7%bb%bc%e8%bf%b0  

## PC端  
安装 vscode https://code.visualstudio.com/  
添加插件 Auto.js-Pro-Ext / hyb1996.auto-js-pro-ext

## Android端  
安装 APK https://pro.autojs.org/

## 如何连接
https://blog.autojs.org/2021/07/05/vscode-debug/



# 可能出现的问题
## 1.响应时间  
也就是代码中的 sleep(10) 这里指等待10毫秒 即1秒100次 如果网速不行或者手机不行 可以适当调整到100/200/300/400/500  
## 2.App版本/各地区活动问题  
可能会导致部分 depth(X) 不太正常 需要针对app当前情况进行调整
## 3.AutoJs版本问题
上面网址所提到的官网版本在小米/华为/腾讯应用商店均可直接下载 安全无毒 但是有收费功能  
网上有4.11版本的免费版本 但是可能存在一定风险 请大家自行甄别 本人就不在此贴网址了  
  

# 抗疫必胜
针对上海疫情大家买不到菜的临时解决方案  
希望疫情能赶快好起来吧  
上海目前物资也有限，请勿使用本软件过度囤货，大家好才是真的好

感谢 @zelbloo 对本项目做出的贡献
