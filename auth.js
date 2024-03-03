import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { authConfig } from "./authconfig";
import { connect } from "mongoose";
import { connectToDB } from "./app/lib/utils";
import { User } from "./app/lib/models";
import bcrypt from "bcrypt";

const login = async (credentials) => {
  try {
    connectToDB();
    const user = await User.findOne({ username: credentials.username });

    if (!user) throw new Error("Wrong credentials");
    const isPasswordCorrect = await bcrypt.compare(
      credentials.passwordword,
      user.password
    );

    if (!isPasswordCorrect) throw new Error("Wrong credentials");
    return user;
  } catch (error) {
    console.log("error: ", error);
    throw new Error("Fail to login");
  }
};

export const { signIn, signOut, auth } = NextAuth({
  ...authConfig,
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        try {
          const user = await login(credentials);
          return user;
        } catch (error) {
          return null;
        }
      },
    }),
  ],
});
