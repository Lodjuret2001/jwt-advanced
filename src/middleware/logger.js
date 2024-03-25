function beforeLogger(req, res, next) {
  console.log("Request sent...");
  return next();
}

function afterLogger(req, res, next) {
  console.log("Request successfully handled...");
}

export { beforeLogger, afterLogger };
