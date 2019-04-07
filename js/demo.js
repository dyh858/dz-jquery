$(function(){
	$.ajax({
		type:'get',
		url:'data/emp.html',
		dataType:'json',
		success:function(response,status,xhr){
			$('#test').append('<li id="k">点我</li>')
		}
	});

/*
	$(".move").click(function(){
		alert("点到我move了！");
	});
	$(".move").click();  //会触发
*/
/*
	$(document).delegate("#k","click",function(){
		alert("点到我了kk");
		console.log(111);  
	});
	$('#k').click(); //不会触发
*/
	$('#test').on('click','#k',function(){
		alert("点到我了k2k");
		
	});
	$('#k').trigger();//不会触发
});