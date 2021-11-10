const { User, Item } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id }).select(
          "-__v -password"
        );

        return userData;
      }

      throw new AuthenticationError("Please log in first.");
    },
    // get all users
    users: async () => {
      return User.find().select("-__v -password");
    },
    // get user by username
    user: async (parent, { username }) => {
      return User.findOne({ username }).select("-__v -password");
    },
    // get item by item name
    item: async (parent, { name }) => {
      return Item.findOne({ name });
    },
    // get all items
    items: async () => {
      return Item.find();
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Those credentials are incorrect.");
      }

      const correctPassword = await user.isCorrectPassword(password);

      if (!correctPassword) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);
      return { token, user };
    },
    createItem: async (parent, args, context) => {
      if (context.user) {
        const userUpdate = await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { savedItems: args.itemData } },
          { new: true }
        );

        return userUpdate;
      }

      throw new AuthenticationError(
        "You must be logged into create new items!"
      );
    },
    addItem: async (parent, args, context) => {
      if (context.user) {
        const userUpdate = await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { currentList: args.itemData } },
          { new: true }
        );

        return userUpdate;
      }

      throw new AuthenticationError(
        "You must be logged into add items to your list!"
      );
    },
    removeItem: async (parent, args, context) => {
      if (context.user) {
        const userUpdate = await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $pull: { currentList: args.itemData } },
          { new: true }
        );

        return userUpdate;
      }

      throw new AuthenticationError(
        "You must be logged into remove items from your list!"
      );
    },
    deleteItem: async (parent, args, context) => {
      if (context.user) {
        const userUpdate = await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $pull: { savedItems: args.itemData } },
          { new: true }
        );

        return userUpdate;
      }

      throw new AuthenticationError(
        "You must be logged into delete items!"
      );
    },
  },
};

module.exports = resolvers;
