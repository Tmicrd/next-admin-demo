import { User } from "./models";
import { connectToDB } from "./utils";

export const fetchUsers = async () => {
  try {
    await connectToDB();
    const users = await User.find();
    return users;
  } catch (error) {
    console.log("error: ", error);
    throw new Error("Fail to fetch users");
  }
};
