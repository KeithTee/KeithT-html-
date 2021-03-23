# 是前后台数据交互的核心，也是现在流行的前后台分离的最常用的工具

	1.var xhr = new XMLHttpRequest();
	
		实例化ajax对象:

		status   当前请求进行到的步骤

			200   一切正常

			304   一切正常，但是数据和上一次一模一样，所以不进行更改

			404   not found ajax的请求地址写错了

			403   用户没有权限，一般网上免费的接口请求次数过多会出现该错误

			500   服务器错误

			502   需要携带的参数出现问题

			505   java服务器常见的服务器错误
			
	2.xhr.open('GET','http://localhost:3000/');
	
	
		准备发送请求，也可以理解为连接到服务器
	
		method    请求方式，目前只有两种:get/post
		
		url       请求地址
		
	3.xhr.send();	
	
		发送请求
		
	4.xhr.onreadystatechange = function(){
		//	判断是否到达第4步
			if(xhr.readyState == 4){
				console.log(xhr.responseText);
				// box.innerHTML = xhr.responseText
			}
		}
	
	onreadystatechange   当0-4的状态发生改变的时候，都会触发这个事件
		
		readyState   判断请求是否走到哪一步
		
		responseText  响应返回的内容