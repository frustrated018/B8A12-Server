const checkAdmin = async (req, res) => {
  const email = req.params.email;

  // Major Isseue:
  //   There is something wrong when a normal user logs in it still sends A 403 status
  
  if (email !== req.decoded.email) {
    return res.status(403).send({ message: "forbidden access" });
  }

  res.send({ admin: true });
};

module.exports = checkAdmin;
