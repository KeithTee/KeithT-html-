# KeithT-html-
实训中自己的一些技术理解和小玩意，持续更新中~

#	HTML

##	什么是HTML？

	超文本标记语言

##	HTML语言语法

	<标签>实体内容</标签>

	<标签1>
		<标签2></标签2>
	</标签1>

	<标签 属性=“属性的值”>实体内容</标签>

##	HTML的颜色表示方式

	red,orange,yellow,green,cyan,blue,purple	等等颜色单词

	rgb模式	rgb(红色值，绿色值，蓝色值)

		每种颜色的取值范围是0-255

	rgba模式		rgba(红色值，绿色值，蓝色值，亮度)

		亮度取值范围是0-1

	HEX模式		#红色值绿色值蓝色值

		红色值绿色值蓝色值的取值范围都是0-255，但是是16进制


##	HTML框架标签

	<!doctype html>   文档声明，告诉电脑，这是	HTML5标准的文档

	<html></html>	所有的HTML内容，都需要写在这两个标签里面

	<head></head>	头部标签，放置和页面显示内容无关的内容

	title标签	网页标题标签，同时也是搜索引擎的网页标题抓取标签

	<meta name="description" content="xxx">	网站描述，就是搜索引擎抓取的网站简介

	<meta charset="utf-8">	字符集编码格式

		UTF-8	国际中文字符集编码规范

		GBK		国家标准扩展

		GB2312	国家2312标准扩展

	<body></body>	页面所有显示的实体内容都需要写在body标签中

##	实体内容标签

###	格式标签

	<p></p>	段落标签，表示文章中的段落

		注意：

			1. 每个段落标签独占一行
			2. 每个段落标签不会空两格
			3. 每个段落标签中间会有一行间隙

	h1-h6  文章标题标签

		注意：

			1. 每个H标签都是加粗的
			2. 每个H标签独占一行
			3. h1标签，一个页面只能使用一个，用来突出页面最重要的内容
			4. h4-h6尽量不要使用

	<b></b>	加粗/粗体标签

	<i></i>	斜体标签(italic)

	<font></font>	字体标签

		color 	设置font标签的字体颜色

		size    设置font标签的字体大小

			取值范围是1-7

	<center></center>	水平居中标签

	marquee	滚动标签

		scrollamount	滚动速度，取值范围是1-6

		width	设置标签的宽度

###	列表标签

	<nav></nav>	导航栏标签

	<ul></ul>	无序列表

		需要配合li标签进行使用

		可以通过type属性来改变列表标识的

		circle	圆圈

		disc	圆点	

	<ol></ol>	有序列表

###	功能性标签

	<a href=""></a>	超链接标签

		属性href是跳转的指定位置

		锚点用法：

			1. 使用a标签，在页面上确定跳转的位置，然后用name="自定义名称"

			2.使用a标签，href="#自定义名称"，会跳转到指定位置

	<img > 图片标签

		src 是图片资源地址的属性

			常见的图片格式有：jpg,png,jpeg,gif,svg

		title 图片标题

		alt   资源加载失败提示

	progress  进度条标签

		value	当前的进度条进程

		max     进度条的最大值

###	表格标签

	table   表格标签

		border	设置表格标签的边框的宽度

		bgcolor 设置表格标签的背景颜色

	tr      行标签

		bgcolor	设置一行的背景颜色

			如果设置了行背景颜色，会覆盖掉table的背景颜色

	td      单元格标签

		bgcolor	设置一个单元格的背景颜色

### 表单标签

	form  表单标签

		method   请求的类型

			get/post

		action   请求的地址

			服务器的地址

	input   输入框标签

		type   设置输入框的类型

			text    文本输入框

			password 密码输入框

			submit   确认提交

			reset    重置表单

			radio    单选表单

			number	 数字表单

			email    邮箱表单

			color    颜色表单

			time     时间表单

			date     日期表单

			datetime-local   时间日期表单(兼容性极差)

		value  设置输入框的值

		placeholder  设置表单的预设值

		required  设置该表单为必须填写的表单

	select   下拉菜单

		需要配合option进行使用

	button    按钮

		type   设置按钮的类型

			submit

			reset

			button   普通按钮

----

###	计算机的路径问题

	ls   查看当前文件夹内都有什么文件

	cd   进入/退出某个文件夹

	pwd  查看当前终端的位置

##	CSS层叠样式表

###	如何使用css

	1. 直接在HTML的文档的head部分，使用style里面写css

	2. 使用Link标签，从外部引入css

	<link rel="stylesheet" type="text/css" href="文件路径">

	3. 可以直接在标签中使用style属性进行使用

###	css语法

	选择器{
		属性1：属性1的值;
		属性2：树形2的值;
	}

###	css选择器

	*	通用选择器

		选中页面上的所有元素，添加样式(包含body,html)

	标签 标签选择器

		选中页面上的所有该类标签，赋值样式

	class选择器/类选择器

		首先，在标签中，使用class属性，给该标签起一个名字

		其次，在css中，使用.标签名字的用法，书写样式

		最后，所有同名的标签，都会被添加样式

	id选择器

		首先，在标签中，使用id属性，给该标签起一个名字

		其次，在css中，使用#标签名字的用法，书写样式

		最后，同名id只能有一个

	外部选择器 内部选择器   关系选择器

		选中某个标签里面的某个标签

	选择器1,选择器2    

		同时选中选择器1和选择器2添加样式

	某个选择器:hover 伪元素选择器

		鼠标放置在元素上面的时候有什么变化

###	CSS属性

####	背景属性

	background-color	设置元素的背景颜色

		属性值就是颜色值

	background-image	设置元素的背景图片

		属性值是url("图片地址")

	background-repeat   设置元素的背景图片重复方式

		no-repeat   背景图片不重复

		repeat-x    背景图片横向重复

		repeat-y    背景图片纵向重复

	background-position  设置背景图片的位置

		属性值是一对坐标点，可以使用位置单词

	background-attachment 设置背景图片的绑定方式

		fixed    相对绑定

	background   背景图片综合属性

		把上面的所有属性，全部都写在一个属性值里面

		有两个特殊的属性值，线性渐变：linear-gradient，以及径向渐变:radial-gradient

		这两个属性值兼容性不好，正在慢慢推广

		linear-gradient(渐变方向,颜色1，颜色2，颜色3，颜色4..)

		如果属性不兼容，需要添加浏览器实验性前缀

			-webkit-    谷歌/苹果浏览器

			-ms-        IE浏览器

			-o-         欧朋浏览器

			-moz-       火狐浏览器

		radial-gradient(形状，开始颜色，颜色2，...)

			形状有两个：circle圆形   ellipse椭圆

	background-size    设置背景图片的大小

###	过渡属性

	过渡：一个属性的属性值缓慢变化成另一个属性值的过程

	transition:需要过渡的属性 过渡的方式 过渡的时间 延迟的时间

		过渡的方式:

			a. 线性过渡  linear

			b. 平滑过渡  ease

			c. 由快到慢  ease-in

			d. 由慢到快  ease-out

			e. 自定义贝赛尔曲线  

### 字体属性

	font-size	设置字体大小

		属性值是长度单位，常用px

		默认的字体大小是16px，一般情况下都是偶数大小

	color  设置字体颜色

		值为颜色值

	font-weight	设置字体粗细

		bold  加粗

		normal  正常

		800    加粗

	font-style  设置字体风格

		italic  斜体

		nromal  正常

### 边框属性

	border:边框的风格 边框的宽度 边框的颜色

	边框的风格：

		solid    单实线

		double   双实线

		dashed   虚线

	border-radius	圆角属性

### transform 变换属性

	rotate(旋转角度)

		角度deg代表度数，rad代表弧度

		roteteX,rotateY,rotateZ来控制绕着哪个轴进行转动

	translate(水平坐标,垂直坐标)  平移

		水平坐标和垂直坐标都是可以正负

	scale(水平放大倍数,垂直放大倍数)

	skew(水平扭曲角度,垂直扭曲角度)

####	如何使用3d变换属性

	首先，需要将2D页面伸展为3D的空间

	需要使用透视属性:

	perspective 透视属性，属性值是一个长度，一般在body中进行使用

### 文本属性

	text-align    设置文本的水平排列方式

		left	文本水平靠左排列

		center  文本水平居中排列

		right   文本水平靠右排列

	line-height    设置文本行高

	text-indent    设置文本首行缩进

	text-decoration	设置文本的修饰线

		none	没有修饰线

		underline  下划线

		overline   上划线

		line-thourgh  删除线/中横线

----

###	margin	外间距属性

	margin:一个值

	四个方向都是一个值

	margin:第一个值 第二个值

	上下是第一个值  左右是第二个值

	margin:第一个值 第二个值 第三个值

	上面是第一个值   左右是第二个值   下面是第三个值

	margin:第一个值 第二个值 第三个值 第四个值

	按照上右下左的顺序，分别对应4个值

	如果是独占一行的标签，可以使用margin:上下值需要手动填写 auto的方式，让这个标签水平居中

	margin-left   margin-top  margin-right  margin-bottom

### padding 内间距属性

	内间距属性不是用来调整位置的，改变元素大小的

	平时在工作中，内间距属性也会被叫做内补白属性，用来撑开元素大小

	padding属性的属性值，在一个值，两个值，三个值和四个值的时候，和margin是一致的

###	position 定位

	static   静态定位

	fixed    绑定定位

		用于将某个固定内容绑定在页面上的

	relative 相对定位

		定位的坐标原点，是元素原来的位置。

		元素被定位之后，原来的位置还占着

	absolute 绝对定位

		元素原来的位置不再占有，这种情况叫做脱离标准文档流

		在没有任何父级元素的情况下，绝对定位是基于页面最左上角进行定位的

### 浮动

	浮动是HTML+CSS阶段最难的属性

	作用就是把块状元素横向排列

	让竖直排列的元素横向排列，称之为浮动

	float:left,right

	浮动会脱离标准文档流

####	解决浮动为页面带来的影响--清除浮动

	清除浮动:clearfix

	1. 保证浮动元素的父级元素，宽高一切正常

	2. 清除浮动属性，给下面的元素添加。哪个元素受到了浮动元素的影响，就给哪个元素添加

		clear:both

	3. after选择器清除浮动

		ul:after{
			content:"";
			background:red;
			display:block;
			height:0px;
			clear:both;
		}

	4. hidden清除浮动

####	标签/元素分类

	块状元素：独占一行的元素，可以设置宽度和高度

		默认宽度为100%，默认高度为0

		P,H1-H6,div。。。

	行内元素：不会独占一行的元素，不可以设置宽度和高度

		默认宽度和高度都是0

###	animation 动画属性

	动画属性区别于过度属性，简单来说，就是可以自动播放

	animation-name   设置动画的名称

	animation-duration 完成动画所需要的时间

	animation-timing-function 设置动画播放的效果

		linear  线性   ease   平滑

	animation-delay    设置动画播放的延迟时间

	animation-iteration-count  设置动画播放的次数

		可以是有限次，也可以是无限次(infinite)

	animation-direction  设置动画播放是否反向

		alternate  可以反向

### 获取设备真实宽度和高度

	<meta name="viewport" content="width=device-width,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"/>

###	flex 弹性盒子

	弹性盒子是用来写页面的，但是不推荐在pc端页面使用

	用于横向排列的内容的父级需要转化成弹性盒子

	flex-direction  设置弹性盒子的排列方式

		row     横向排列

		column  纵向排列

	flex-wrap     设置弹性盒子内部元素是否换行

		wrap  换行

		nowrap  不换行

	justify-content  设置弹性盒子内部元素的排列

		flex-start   从左向右排列

		flex-end     从右向左排列

		center       水平居中排列

		space-around 平均分布

		space-between 两端对齐

	align-items  设置盒子模型的元素的纵向排列

		flex-start   所有元素靠上排列

		flex-end	 所有元素靠下排列

		center       所有元素居中排列

###	环境安装

	安装Node.js 群里有文件

	安装完成之后，打开终端，输入node -v 和 npm -v看是否正常
	
	如果显示版本号，那么说明环境安装成功

	node版本必须在12.0以上

	安装完毕之后，尝试安装环境，查看网络是否被禁用

	npm install webpack -g

	如果出现错误信息，信息是链接失败，那么说明网络禁用了外国源

###	js运行的环境

	js只能在两个环境下运行:

		1. 在html文件中

		2. node中

			新建一个js文件，在里面写上内容console.log("这是我测试环境是否正常")

			通过终端的node 1.js执行

#	JavaScript  

##	语言相关说明

	JS是一门弱类型语言

	JS和Java没有任何关系

	JavaScript = ECMAScript + DOM + BOM + ajax（xhr）  

##	js如何进行使用

	在html中，可以直接使用script标签，书写js，不限位置

##	js的输出方式

	alert('输出内容')   警告框

	console.log('输出内容')  在控制台输出

	document.write('输出内容')  在页面上书写

##	JS基础语法

###	基本数据类型

	number   数字类型

	string   字符串类型

	boolean  布尔类型

		只有两个值true false

	function 函数类型

	object   对象类型

	undefined  未定义类型

###	js的运算符

	%   取余操作/求模操作

	a++	   先赋值，再自增

		b = a++  会先把a的值赋值给b，然后a+1

	++a    先自增，在赋值

	a+=1   等价于a = a + 1

	typeof  显示后面变量的基本数据类型

	new     实例化对象关键字

##	流程控制

### 判断

	1. switch...case判断

	2. if...else判断

###	循环

	1. for循环

##	函数

###	声明函数和匿名函数

	声明函数:

		functioin 函数名称(参数){
			函数体
		}

	匿名函数:

		var 变量 = function(){

			函数体

		}

###	回调函数

	使用整个函数当做参数

###	参数

	function abc(形式参数){
		console.log(实际参数);
	}

###	return 返回值

	函数返回的执行结果就是函数的返回值

	一个函数一旦执行到return那么会立即停止

###	递归函数

	自己调用自己的函数，就叫做递归函数

	如果遇到递归函数，要记住，代码是从上往下执行的

##	对象

	功能和属性的集合，被称之为对象

	比如，空调：

		属性:一米八，白色，比较窄，比较显高

		功能：制冷，制热，换气

###	如何实例化对象

	var 对象名称 = {}

	var 对象名称 = new Object();

###	数学对象

	Math.PI    圆周率

	Math.floor   向下取整，把小数点后面直接切掉

	Math.random  去随机数，是一个十二位的0-1之间的小数

	Math.round    四舍五入

	Math.ceil     向上取整

###	时间对象

	获取系统时间的对象，这里的重点是时间戳

	var time = new Date();

	time.getFullYear()  获取当前所在的年

	time.getMonth()     获取时间对象的月份，从0算起

	time.getDay()       获取星期

	time.getDate()      获取日期

	time.getTime()      时间戳，唯一一个程序里面通用的时间表示方式。从1970年1月1日零点到现在这一刻起的毫秒数

	time.getHours()     获取小时数

	time.getMinutes()   获取分钟

	time.getSeconds()   获取秒数

###	xhr对象

	是前后台数据交互的核心，也是现在流行的前后台分离的最常用的工具

	实例化ajax对象:

		var xhr = new XMLHttpRequest();

		status   当前请求进行到的步骤

			200   一切正常

			304   一切正常，但是数据和上一次一模一样，所以不进行更改

			404   not found ajax的请求地址写错了

			403   用户没有权限，一般网上免费的接口请求次数过多会出现该错误

			500   服务器错误

			502   需要携带的参数出现问题

			505   java服务器常见的服务器错误


		open(method,url)	准备发送请求

			method    请求方式，目前只有两种:get/post

			url       请求地址

		send()		开始发送请求

		onreadystatechange   当0-4的状态发生改变的时候，都会触发这个事件

		readyState   判断请求是否走到哪一步

		responseText  响应返回的内容

###	服务器如何启动，以及相关的准备工作

	更新代码之后，会在项目文件夹里面出现一个文件夹，叫做server

	进入文件夹，打开终端，在node和npm没有问题的情况下，输入npm install


	如果没有红色错误，那么下载完毕之后，输入npm start

	然后ajax中的http://localhost:3000的所有内容都可以使用，否则会404

	localhost代表本机，可以使用127.0.0.1代替，也可以使用你的ip地址代替

	代码提交之前，需要删除server文件夹里面的node_modules文件夹

#	Vue.js

##	如何使用vue

	1. 需要使用script标签，在页面上方引入

	2. 使用new Vue()实例化一个vue对象

	3. 需要指定一个div，让vue生效

		<div id="app">
		
		</div>

		new Vue({
			el:'#app',
			
		});

	4. 测试vue是否可以使用

##	数据绑定

	Vue中，所有的变量，都需要在data对象中进行声明

	声明完毕的变量，可以使用{{ 变量名称 }}在页面上渲染出来

##	Vue的指令

	v-model  输入框数据绑定

	v-for	 遍历渲染

		<div v-for="(item,index) in list">
			{{ item }}
		</div>

		item是数组中的每一项，index是数组下标

	v-on	绑定事件

		 <a class="btn btn-primary btn-lg" role="button" v-on:click="searchFood">搜索</a>

		 click是事件类型

		 函数必须写在methods里面才能生效

	v-if	控制页面内容是否显示

##	vue框架

	需要使用npm在电脑中安装vue框架环境

		npm install -g @vue/cli

##	创建vue项目

	在所需要的文件夹，打开终端，输入vue create 项目名称

	建议大家使用系统终端输入命令，可以使用上下箭头，否则界面静止的，看不到自己选的哪个

##	运行vue项目

	在项目文件夹打开终端，执行npm run serve

##	vue项目目录

	package.json    项目配置文件，必须要有

	readme.md       项目作者的笔记

	node-modules    项目插件

	public          公共资源，不能删

	src             主要文件

		assets      资源文件夹

		components  组件，一个程序员是否能够工作，核心就是封装组件

		main.js     入口文件，一般不动

		App.vue     页面

##	目前比较流行的开发模式

	组件化开发，类似于工厂模式，有一个类，从该类中继承不同性状的对象(多态)

	比如有个公共类，猫。由猫扩展出白猫，黑猫，蓝猫等等

##  需要引入bootstrap
	
	在main.js中，
	
	// 引入bootstrap
	import './assets/css/bootstrap.css'
	
##  Vue框架中，一般不适用jquery发送ajax

	axios和jquery用法几乎一致，一般使用他来发送ajax
	
	在vue框架中安装axios:npm install axios --save-dev

	需要在框架中进行引用:
	
	import axios from 'axios'









