function reduce(arr,fn,initial) {
	if (!arr.length){
		return initial;
	}
	return reduce(arr.slice(1),fn,fn(initial,arr[0]));
}


//rxa =  reduce([1,2,3,4],function(a,b){return a+b;},0);
//console.log(rxa);

module.exports = reduce;
