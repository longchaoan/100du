$(function(){
	
	/*tab组件的封装*/
	function tabs(obj,cont,event){
		
		$(obj).each(function(i){
			$(this).on(event,function(){
				$(this).siblings().removeClass('active');
				$(this).addClass('active');
				$(cont).children().eq(i).show().siblings().hide();
			});
		});
		
	}

	/*第一部分的JS*/
	/*搜索区的JS*/
	(function(){
		var aSousouLi=$(".sousou li");
		var oText=$("#seach .text");
		var arrText = [
			'例如：荷棠鱼坊烧鱼 或 樱花日本料理',
			'例如：昌平区育新站龙旗广场2号楼609室',
			'例如：万达影院双人情侣券',
			'例如：东莞出事了，大老虎是谁？',
			'例如：北京初春降雪，天气变幻莫测'
		];
		var index=0;
		oText.val(arrText[index]);
		aSousouLi.each(function(i){
			$(this).click(function(){
				$(this).siblings().attr('class','');
				$(this).attr('class','active');
				index=i;
				oText.val(arrText[index]);
			});
		});
		
		oText.focus(function(){
			
			if(oText.val()==arrText[index]){
				oText.val('');
			}
			
		});
		
		oText.focusout(function(){
			
			if(oText.val()==''){
				oText.val(arrText[index]);
			}
			
		});
		
	})();
	
	
	/*第二部分的JS*/
	/*搜索下的轮播li*/
	(function(){
		
		var update=$(".update");
		var updateLi=$(".update li");
		/*li数组*/
		var updateArr=[
			{'name':'萱萱','title':'写了一篇新文章：那些灿烂华美01','url':'http://www.baidu.com','time':'5分钟'},
			{'name':'哈哈','title':'写了一篇新文章：那些灿烂华美02','url':'http://www.baidu.com','time':'7分钟'},
			{'name':'唱唱','title':'写了一篇新文章：那些灿烂华美03','url':'http://www.baidu.com','time':'9分钟'},
			{'name':'雯雯','title':'写了一篇新文章：那些灿烂华美04','url':'http://www.baidu.com','time':'11分钟'},
			{'name':'小海','title':'写了一篇新文章：那些灿烂华美05','url':'http://www.baidu.com','time':'15分钟'},
			{'name':'知名','title':'写了一篇新文章：那些灿烂华美06','url':'http://www.baidu.com','time':'18分钟'}
		];
		var str='';
		
		for (var i = 0; i < updateArr.length; i++) {
			
			str+='<li><a href="'+updateArr[i].url+'"><strong>'+updateArr[i].name+'</strong> <span>'+updateArr[i].time+'</span> '+updateArr[i].title+'</a></li>';
		}
		update.html(str);
		
		/*上按钮的点击事件*/
		var num=0;
		var time=null;
		/*鼠标移动到盒子上清除定时器*/
		$('.update_warp').mouseover(function(){
			clearInterval(time);
		});
		
		/*鼠标移开开启定时器*/
		$('.update_warp').mouseout(function(){
			time=setInterval(topMove,2000);
		});
		$('.prev').click(function(){
			topMove();
		});
		
		/*下按钮的点击事件*/
		$('.next').click(function(){
			num--;
			if(num<0){
				num=updateArr.length-1;
			}
			
			update.stop().animate({top:-30*num+'px'},500);
		});
		
		/*设置定时器*/
		time=setInterval(topMove,2000);
		function topMove(){
			num++;
			if(num>updateArr.length-1){
				num=0;
			}
			update.stop().animate({top:-30*num+'px'},500);
		}
	})();
	
	/*第三部分的JS*/
	/*点击选项卡*/
	(function(){

		/*产品的tab点击*/
		tabs('.foodTab li','.foodWrap .tabCont','click');
		
		/*地图的tab点击*/
		tabs('.mapTab li','.wayWrap .tabCont','click');
		
	})();
		
	/*第四部分的JS */
	/*鼠标经过选项卡*/
	(function(){
		/*知道分子区的tab事件*/
		tabs('.zhidao li','#zhidao .tabCont','mouseenter');
		/*抢卷儿区的tab事件*/
		tabs('.qiangjuaner li','#qiangjuaner .tabCont','mouseenter');
		
	})();
	
	
	/*第五部分的JS*/
	/*日历鼠标移动事件*/
	(function(){
		var timeOut=null;
		$('#img24').mouseover(function(){
			$('.float').css('display','block');
		});
		
		$('#img24').mouseout(function(){
			timeOut=setTimeout(function(){
				$('.float').css('display','none');
			},300);
			
		});
		
		$('.float').mouseover(function(){
			clearTimeout(timeOut);
			$(this).css('display','block');
		});
		
		$('.float').mouseout(function(){
			$(this).css('display','none');
		});
	})();
	
	
	/*第六部分的JS*/
	/*图片轮播的JQ*/
	(function(){
		var pic=$('.pic');
		var sPic=$('.sPic');
		/*初始化第一张图片,让它显示出来*/
		pic.eq(0).css('display','block');
		/*遍历小图片*/
		sPic.each(function(i){
			/*为每个小图片添加点击事件*/
			$(this).click(function(){
				/*清除所有小图片的选中样式*/
				sPic.attr('class','sPic');
				/*为当前点击的小图片添加样式*/
				$(this).addClass('active');
				pic.css('display','none');
				pic.eq(i).css('display','block');
			});
		});
		
		var time=null;
		var num=0;
		time=setInterval(picPlay,2000);
		/*定时器的函数*/
		function picPlay(){
			num++;
			if(num>pic.length-1){
				num=0;
			}
			sPic.attr('class','sPic');
			sPic.eq(num).addClass('active');
			pic.css('display','none');
			pic.eq(num).css('display','block');
		}
		
		/*鼠标移入盒子清除定时器*/
		$('.banner').mouseover(function(){
			clearInterval(time);
		});
		
		/*鼠标移开盒子开启定时器*/
		$('.banner').mouseout(function(){
			time=setInterval(picPlay,2000);
		});
	})();
	
	
	/*第八部分的JS*/
	/*为BBS论坛添加事件*/
	(function(){
		$('.bbsUl li').each(function(){
			$(this).mouseover(function(){
				$(this).siblings().attr('class','');
				$(this).attr('class','active');
			});
		});
	})();
	
	/*第九部分的JS*/
	(function(){
		var txt=['','用户名1','用户名2','用户名3','用户名4','用户名5','用户名6','用户名7','用户名8','用户名9','用户名10'];
		$('.user li').each(function(i){
			$(this).mouseover(function(){
				if($(this).index()==0){
					return;
				}
				$('.user li p').remove();
				$(this).append('<p style="width:'+$(this).width()+'px;height:'+$(this).height()+'px;background:#272822;opacity:0.7;">'+txt[i]+'</p>')
				
			});
		});
	})();
	
	
	/*第十部分的JS*/
	(function(){
		$('#sideTxt').click(function(){
			if($(this).val()=='输入关键字'){
				$(this).val('');
			}
			return false;
		});
		
		$(document).click(function(){
			if($('#sideTxt').val()==''){
				$('#sideTxt').val('输入关键字');
			}
		});
	})();
});