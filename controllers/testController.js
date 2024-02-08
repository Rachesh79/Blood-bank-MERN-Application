const testController = (req, res) => {
  res.status(200).json({
    message: "test router",
    success: true,
  });
};

module.exports = { testController };
