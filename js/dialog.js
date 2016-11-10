
 // 移动端弹框插件
 ;(function($,window){
 	//定义一个构造函数,
 	var Dialog=function(options){
 		var _this=this;//this为实例化对象；
 		//定义默认参数；
 		this.config={
 			//配置点击遮罩层是否可以关闭
 			maskClose:null,
 			//配置遮罩层的透明度和颜色
 			maskOpacity:'rgba(0,0,0,0.6)',
 			//配置延迟关闭
 			delay:null,
 			//配置延迟关闭后的回调函数；
 			delayCallback:null,
 			//对话框的宽高
			width:"auto",
			height:"auto",
 			//配置按钮组,buttons是一个数组对象［］；传三个参数：
 			//0）type表示按钮背景的选择器；1）btnText表示按钮文字；2）callback表示点击之后的回调函数；
 			buttons:null,
 			//配置文本信息
 			message:null,
 			//配置图表类型
 			type:'waiting',
 			//是否启用动画
 			effect:null
 		}

 		//默认参数扩展 （合并自定义参数）
 		if(options && $.isPlainObject(options)){
 			$.extend(this.config,options);//jquery中传true为深度拷贝，这里 zepto不可以传true；
 		}else{
 			this.isoptions=true;
 		}

 		this.domele();
 		this.creatEle();
 	}

 	Dialog.zIndex = 10000;  //在Dialog这个类上定义一个静态的属性 记录弹框层级 ,为什么不定义上面是因为面向对象开发每个类都是独立多态的,//new出来的zIndex可能跟其他弹框没有关联

 	//在Dialog  prototype对象添加属性和方法；
 	Dialog.prototype={
 		//创建dom结构
 		domele:function(){
 			// console.log(this)
 			this.body = $("body");//body
			this.mask = $('<div class="g-dialog-contianer">');//创建遮罩层
			this.box = $('<div class="dialog-window">');//创建弹出框
			//创建弹出框头
			this.bHeader = $('<div class="dialog-header"></div>');
			//创建提示信息
			this.bContent = $('<div class="dialog-content"></div>');
			//创建弹出框按钮组
			this.bFooter = $('<div class="dialog-footer"></div>');
 		},

 		// 创建动画
		animate:function(){
			var _this=this;
			this.box.css('-webkit-transform','scale(0)');
			window.setTimeout(function(){
				_this.box.css('-webkit-transform','scale(1)');
			},100)
		},	

 		//渲染弹框方法；
 		creatEle:function(){
 			//将属性保存为变量，
 			var _this=this,
 				config=this.config,
 				body=this.body,
 				mask=this.mask,
 				box=this.box,
 				header=this.bHeader,
 				content=this.bContent,
 				footer=this.bFooter;

 			//每次实例化对象增加弹框的层级；
 			Dialog.zIndex++;
 			mask.css('zIndex' ,Dialog.zIndex);
 			// console.log(Dialog.zIndex)

 			//如果没有传参就弹出一个等待弹框
 			if(this.isoptions){
 				box.append(header.addClass('waiting'));
 				if(config.effect){
 					this.animate();
 				};
 				mask.append(box);
 				body.append(mask);

 			}else{
 				console.log(123)
 				//根据传入的参数配置对应的弹框；
 				box.append(header.addClass(config.type))
 				//如果传了文本信息
 				if(config.message){
 					box.append(content.html(config.message))
 				};
 				console.log(config)
 				//如果传了按钮
 				if(config.buttons){
 					this.creatBtns(footer,config.buttons);
 					box.append(footer);
 				};
 				
 				if(config.width!='auto')box.width(config.width);
 				if (config.height!='auto') {box.height(config.width)};

 				if(config.delay&& config.delay!=0){
 					window.setTimeout(function(){
 						_this.close();
 						config.delayCallback&&config.delayCallback();//注意与的判断语句；
 					},config.delay)
 				}

 				//遮罩层的透明度
 				if(config.maskOpacity)
 					// mask.css('background','rgba(0,0,0,'+config.maskOpacity+')')
 					mask.css('background',config.maskOpacity)

 				//点击遮罩层是否可关闭
 				if(config.maskClose){
 					mask.click(function(){
 						_this.close();
 					})
 				}

 				mask.append(box);
 				body.append(mask);
 				//是否启用动画；
 				if(config.effect){
 					this.animate();
 				};

 			}
 		},
 		//创建按钮
 		creatBtns:function(footer,btns){

 			var _this=this;
 			$(btns).each(function(i){

 				//获取按钮的样式,回调以及文本
				var type = this.type?" class='"+this.type+"'":"";
				var btnText = this.text?this.text:"按钮"+(++i);
				var callback = this.callback?this.callback:null;
				var button = $("<button"+type+">"+btnText+"</button>");
				//点击button
				if(callback){
					button.on('click',function(e){
						e.stopPropagation();
						//执行callback函数，将返回值保存在变量isclose；
						var isclose=callback();
						if(isclose!=false){
							_this.close();
						}
					})
				}else{
					button.on('click',function(e){
						e.stopPropagation();
						_this.close();
					})
				}

				//将每一个button添加到footer
				footer.append(button);
 			})
 		},
 		close:function(){
 			this.mask.remove();
 		}

 	}
 	//返回出实例化对象到zepto对象上；"$.dialog()"这样来调用
 	$.dialog=function(opt){
 		return new Dialog(opt);
 	}

 })(Zepto,window)

































