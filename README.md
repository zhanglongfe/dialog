## dialog移动弹框组件

> 描述：
> 很久之前基于zepto插件写的 用于学习，可在移动端页面使用， 主要包括消息提示框， 询问框， loading状态，可以通过参数进行自定义。


**使用方法：**
1. 引用dialog.css，dialog.js
2. 调用$.dialog()
```
<link rel="stylesheet" type="text/css" href="css/dialog.css">
<script src=“http://cdn.bootcss.com/zepto/1.0rc1/zepto.min.js"></script>
<script src=“js/dialog.js"></script>
$('#btn9').tap(function(){
	$.dialog({
		width:'auto',
		type:"warming",
		message:"延迟关闭加回调",
		delay:2000,
		delayCallback:function(){
		},
		maskOpacity:'rgba(0,0,0,0.6)'
	})
});	
```
	
**参数说明：**
1.` maskClose:null`
//Boolean类型，配置点击遮罩层是否可以关闭，默认null不关闭

2. `maskOpacity: rgba(0,0,0,0.6)`,
//字符串类型，配置遮罩层背景颜色透明度
3. `delay:null`
//Number类型，延迟关闭时间－－毫秒

4. `delayCallback:null`
//Function，配置延迟关闭后的回调函数；

5. `width:"auto"`
      `height:"auto"`
//String，对话框的宽高

6. `buttons:［］`
//Array，传三个参数：type表示按钮背景的选择器；btnText表示按钮文字；callback表示点击之后的回调函数；	

7.` message:null`
//String,配置文本信息
8.`type:'waiting'`
//配置图标类型，引用了图标的class选择器；

8. `effect:null`
//Boolean,是否启用动画
