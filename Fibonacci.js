var fibo = function(n){
	if(n==0){
		return 0
	}else if(n==1){
		return 1
	}else if(n==-1){
		return 0
	}
	else{
		return fibo(n-1)+fibo(n-2)
	}
}
var getCenter = function(n){
	if(n==0){
		return [0,0]
	}else if(n==1){
		return [1,0]
	}else{
		return [getCenter(n-1)[0]+fibo(n-2)*Number(Math.sin((Math.PI*n)/2).toFixed(0)),getCenter(n-1)[1]+fibo(n-2)*Number(Math.cos((Math.PI*n)/2).toFixed(0))]
	}
}
var getPosition = function(deg){
	var n = Math.ceil(deg/90)
	var center = getCenter(n)
	var r = fibo(n)
	return [(center[0]+r*Number(Math.sin((Math.PI*(deg-90))/180))).toFixed(2),(center[1]+r*Number(Math.cos((Math.PI*(deg-90))/180))).toFixed(2)]
}
var gotoPosition = function(dom,fromD,toD,n){
	var index = fromD
	var center = [parseInt(dom.style.left),parseInt(dom.style.bottom)]
	var sss = setInterval(()=>{
			dom.style.left = (center[0]+n*Number(getPosition(index)[0])) + 'px'
			dom.style.bottom = (center[1]+n*Number(getPosition(index)[1])) + 'px'
			index++
			if(index>=toD){
				clearInterval(sss)
			}
		},0)
}