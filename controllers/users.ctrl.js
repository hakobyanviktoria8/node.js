const User = require("./../models/users");

class UsersCtrl {
  getById() {}
  getAll() {}

  async add(req, res) {
    console.log("UsersCtrl add method call");
    if (await User.exists({ username: req.body.username })) {
      throw new Error("User exists");
    } else {
      const user = new User({
        username: req.body.username,
        name: req.body.name,
        image: req.body.image,
      });

      await user.save();
      res.status(201).json({
        success: true,
        data: user,
        message: "User created",
      });
    }
  }

  update() {}

  delete() {}
}

module.exports = new UsersCtrl();
