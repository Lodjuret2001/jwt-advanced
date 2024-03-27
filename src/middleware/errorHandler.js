const errorHandler = (error, req, res, next) => {
  if (error.name === "ValidationError") {
    res.status(400).send(error.details[0].message);
    return next();
  } else {
    res.status(400).send(error.message);
    return next();
  }
};

export default errorHandler;
