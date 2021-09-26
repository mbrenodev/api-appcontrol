const express = require("express");
const jwt = require("jsonwebtoken");

module.exports = {
  async auth(req, res, next) {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({ essege: "Token is required" });
    }

    const [, token] = authHeader.split(" ");

    try {
      await jwt.verify(token, process.env.APP_SECRET);
      next();
    } catch (error) {
      return res.status(40).json({ messege: "Token not found" });
    }
  },
};
