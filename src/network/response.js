exports.success = (req, res, code = '200', message, data) => {
  res.status(code).send({
    'success': true,
    'message': '',
    'data': data,
  });
};

exports.error = (req, res, code='500',message) => {
  res.status(code).send({
    'success': false,
    'message': message,
    'data': {},
  });
};
