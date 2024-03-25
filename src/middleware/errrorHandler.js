const errorHandler = (error, req, res, next) => {
  if (error.name === "ValidationError") {
    res.status(400).send(error.details[0].message);
  } else return res.status(400).send(error.message);
};

export default errorHandler;
