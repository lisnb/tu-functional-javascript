function checkUsersValid(goodUsers) {
	return function(submitUsers) {
		return submitUsers.every( function( su,i,a) {
			return goodUsers.some( function (gu,i,a) {
				return gu.id == su.id;
				});
			});
		};
	}

module.exports = checkUsersValid;

