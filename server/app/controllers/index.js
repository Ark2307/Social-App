const sendResponse = (res, data, message, success, code) => {
  const responseObj = {
    responseData: data,
    message: message,
    success: success,
    responseCode: code,
  };
  res.format({
    json: () => {
      res.send(responseObj);
    },
  });
};

const sendError = (res, data, message) => {
  if (!res) {
    return false;
  }

  sendResponse(res, data, message || "Some error occurred", false, 400);
};

module.exports = { sendError, sendResponse };
