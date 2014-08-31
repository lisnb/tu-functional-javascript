function getdepens(target,des) {
	des = des || [];
	var dependencies=target.dependencies || [];
	Object.keys(dependencies).forEach(function(dep) {
		var key=dep+'@'+target.dependencies[dep].version;
		if(des.indexOf(key) === -1){
			des.push(key)
			}
		getdepens(target.dependencies[dep],des)
		});
	return des.sort()
}

module.exports = getdepens;

