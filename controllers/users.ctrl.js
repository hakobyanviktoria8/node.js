const User = require("./../models/users");

class UsersCtrl {
  getById() {}
  getAll() {}

  // when we use req and res we concat controller to router.rout.POST....
  // That's not right
  // async add(req, res) {
  //   console.log("UsersCtrl add method call");
  //   if (await User.exists({ username: req.body.username })) {
  //     throw new Error("User exists");
  //   } else {
  //     const user = new User({
  //       username: req.body.username,
  //       name: req.body.name,
  //       image: req.body.image,
  //     });

  //     await user.save();
  //     res.status(201).json({
  //       success: true,
  //       data: user,
  //       message: "User created",
  //     });
  //   }
  // }

  async add(data) {
    console.log("UsersCtrl add method call");
    
    if (await User.exists({ username: data.username })) {
      throw new Error("User exists");
    } else {
      const user = new User({
        username: data.username,
        name: data.name,
        image: data.image,
      });

      // when we call that time we use AWAIT
      return user.save();
    }
  }
  update() {}

  delete() {}
}

module.exports = new UsersCtrl();
