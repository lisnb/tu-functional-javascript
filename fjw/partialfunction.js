var slice = Array.prototype.slice;

function logger(namespace) {
	return function(){
		var args = slice.apply(arguments);
		var k=[namespace].concat(args);
		console.log.apply(null,k);
	}
}

module.exports = logger;

