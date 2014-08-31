function Spy(target,func){
	var oriFunc = target[func];

	var result={ count:0};

	target[func]=function(){
		result.count++;
		return thiis.oriFunc.apply(this,arguments);
	}

	return result
}

module.exports = Spy;

