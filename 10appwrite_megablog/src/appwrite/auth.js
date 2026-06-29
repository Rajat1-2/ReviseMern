import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

// import { Client, Account, ID } from "appwrite";

// const client = new Client()
// 	.setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
// 	.setProject("<PROJECT_ID>"); // Your project ID

// const account = new Account(client);

// const user = await account.create({
// 	userId: ID.unique(),
// 	email: "email@example.com",
// 	password: "password",
// });

// can do the prev thing i want that ui and business logic stay different
// so i use classes here
// code improvement

// save it and use it any you want
export class AuthService {
  client = new Client();
  account;

  // account se pehle client ke function call krne h
  // made a constructor so that every time i create a object this called our auto
  // mtlb client and account tbhi ke tbhi bn jaaye
  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.account = new Account(this.client);
  }

  // ander  hi function bna do taki na pta chle ki m appwrite use kr rha ya kassandra use kr rha
  // user se same chij maang rhe bs functionality change kr dijiye
  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        // call another method if user h to login krva do na use
        // return userAccount;
        return this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      throw error;
    }
  }

  async login({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      throw error;
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log("No active session");
      return null;
    }
  }
  async logout() {
    try {
      await this.account.deleteSessions();
    } catch (error) {
      throw error;
    }
  }
} 
const authService = new AuthService();
// bs authservice. se saare function call kr skta hu no need to  make client or account
export default authService
