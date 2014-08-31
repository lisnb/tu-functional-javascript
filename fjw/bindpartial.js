function logger(namespace) {
	var log = console.log.bind(undefined,namespace);
	return log;
}

module.exports = logger;
