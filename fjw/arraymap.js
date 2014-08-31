function arrayMap(arr,fn){
	return arr.reduce(function(list,obj){
		list.push(fn(obj));
		return list;
		},[]);
	}

module.exports = arrayMap;

//var a=[1,2,3,4];
//var b=arrayMap(a,function(o){return o*2;});
//console.log(b)
		
