# dialog
使用zepto编写移动端弹框组件
描述：
dialog弹出框使用zepto插件创建，适用于任何触屏版的项目。包括信息框／提示／询问框／loading等，可以通过参数方便的定义样式内容。
使用方法：
引用dialog.css，dialog.js两个文件，点击调用$.dialog()方法，通过传入｛｝参数配置，比如；
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
	
参数：
maskClose:null,
//Boolean类型，配置点击遮罩层是否可以关闭，默认null不关闭

2）maskOpacity:’rgba(0,0,0,0.6)’,
//字符串类型，配置遮罩层背景颜色透明度
3）delay:null,
//Number类型，延迟关闭时间－－毫秒

4）delayCallback:null,
//Function，配置延迟关闭后的回调函数；

5）width:"auto",
      height:"auto",
//String，对话框的宽高

6）buttons:［］
//Array，传三个参数：type表示按钮背景的选择器；btnText表示按钮文字；callback表示点击之后的回调函数；	

7）message:null,
//String,配置文本信息

8）type:'waiting',
//配置图标类型，引用了图标的class选择器；

 9）effect:null
//Boolean,是否启用动画



＃＃＃312345678
123456