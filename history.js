;(function(){
	var div1 = document.getElementById('div1');
	var a1 = document.getElementById('a1');
	var a2 = document.getElementById('a2');
	var count1 = 0;
  var count2 = 0;
  history.replaceState({count1:count1,count2:count2},null,'');//最开始的状态，采用replace直接替换
	a1.addEventListener('click',function(){
    count1++;
		history.pushState({count1:count1,count2:count2},null,'#/s'+count1);//之后的状态，需要进行保存
		a1.innerHTML = 's'+count1;
	})
	a2.addEventListener('click',function(){
    count2++;
		history.pushState({count1:count1,count2:count2},null,'#/k'+count2);//之后的状态，需要进行保存
		a2.innerHTML = 'k'+count2;
	})
	window.addEventListener('popstate',function(e){
    console.log(e.state);
    a1.innerHTML = 's'+e.state.count1;//监听popstate事件，对状态进行还原
	  a2.innerHTML = 'k'+e.state.count2;
	})
})()
