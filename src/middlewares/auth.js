const express = require("express");
const jwt = require("jsonwebtoken");

module.exports = {
  async auth(req, res, next) {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
<<<<<<< HEAD
      return res.status(401).json({ messege: "Token is required" });
=======
      return res.status(401).json({ essege: "Token is required" });
>>>>>>> fab30b52d3300860ddcb4ae9e6bf25a64369515c
    }

    const [, token] = authHeader.split(" ");

    try {
      await jwt.verify(token, process.env.APP_SECRET);
      next();
    } catch (error) {
<<<<<<< HEAD
      return res.status(401).json({ messege: "Token not found" });
=======
      return res.status(40).json({ messege: "Token not found" });
>>>>>>> fab30b52d3300860ddcb4ae9e6bf25a64369515c
    }
  },
};
