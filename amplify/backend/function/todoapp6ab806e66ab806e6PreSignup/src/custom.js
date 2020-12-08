exports.handler = (event, context, callback) => {
  // automatically confirm user accounts on signup
  event.response.autoConfirmUser = true;
  callback(null, event);
};
