const checkAdmin = async (req, res) => {
  const email = req.params.email;

  if (email !== req.decoded.email) {
    return res.status(403).send({ message: "forbidden access" });
  }

  res.send({ admin: true });
};

module.exports = checkAdmin;
