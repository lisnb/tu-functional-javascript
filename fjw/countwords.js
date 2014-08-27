module.exports =  function(inputWords) {
	return inputWords.reduce( function (res,b) {
		res[b] = res[b]+1 || 1;
		return res
		},{});
}


