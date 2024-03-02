import { User, Product } from "./models";
import { connectToDB } from "./utils";

export const fetchUsers = async (q, page) => {
  const regex = new RegExp(q, "i");
  const ITEM_PER_PAGE = 2;

  try {
    await connectToDB();
    const count = await User.find({ username: { $regex: regex } }).count();
    const users = await User.find({ username: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip((page - 1) * ITEM_PER_PAGE);
    return { count, users };
  } catch (error) {
    console.log("error: ", error);
    throw new Error("Fail to fetch users");
  }
};

export const fetchUser = async (id) => {
  try {
    await connectToDB();

    const user = await User.findById(id);
    console.log("user: ", user);
    return user;
  } catch (error) {
    console.log("error: ", error);
    throw new Error("Fail to fetch users");
  }
};

export const fetchProducts = async (q, page) => {
  const regex = new RegExp(q, "i");
  const ITEM_PER_PAGE = 2;

  try {
    await connectToDB();
    const count = await Product.find({
      title: { $regex: regex },
    }).count();
    const products = await Product.find({ title: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip((page - 1) * ITEM_PER_PAGE);
    return { count, products };
  } catch (error) {
    console.log("error: ", error);
    throw new Error("Fail to fetch users");
  }
};

export const fetchProduct = async (id) => {
  try {
    await connectToDB();

    const product = await Product.findById(id);
    return product;
  } catch (error) {
    console.log("error: ", error);
    throw new Error("Fail to fetch product");
  }
};
