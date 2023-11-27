
function errorHandler(err, req, res, next) {
  // Log the error
  console.error(err);

  // Set the status code
  res.status(500);

  // Send the error message as the response
  res.send({
    error: err.message
  });
}

module.exports = errorHandler;
