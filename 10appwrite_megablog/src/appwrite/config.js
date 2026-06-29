// import conf from "../conf/conf";
// import { Client, ID, Databases, Storage, TablesDB, Query } from "appwrite";

// //appwrite.io/docs/products/storage/quick-start

// // import { Client, ID, TablesDB } from "appwrite";

// // const client = new Client()
// // 	.setEndpoint("https://<REGION>.cloud.appwrite.io/v1")
// // 	.setProject("<PROJECT_ID>");

// // const tablesDB = new TablesDB(client);

// // const promise = tablesDB.createRow({
// // 	databaseId: "<DATABASE_ID>",
// // 	tableId: "<TABLE_ID>",
// // 	rowId: ID.unique(),
// // 	data: { title: "Hamlet" },
// // });

// // promise.then(
// // 	function (response) {
// // 		console.log(response);
// // 	},
// // 	function (error) {
// // 		console.log(error);
// // 	}
// // );

// export class Service {
// 	client = new Client();
// 	databases;
// 	bucket;

// 	constructor() {
// 		this.client
// 			.setEndpoint(conf.appwriteUrl)
// 			.setProject(conf.appwriteProjectId);

// 		this.databases = new TablesDB(this.client);
// 		this.bucket = new Storage(this.client);
// 	}

// 	async createPost({ title, slug, content, featuredimage, status, userId }) {
// 		try {
// 			return await this.TablesDB.createRow(
//         conf.appwriteDatabaseId,
//         conf.appwriteCollectionId,
//         slug, //docu id
//         // object to be saved
//         {
//           title,
//           content,
//           featuredimage,
//           status,
//           userId,
//         }
//       );
// 		} catch (error) {
// 			console.log(error);
// 		}
// 	}
// 	async updatePost(slug, { title, content, featuredimage, status }) {
// 		try {
// 			return await this.TablesDB.updateRow(
//         conf.appwriteDatabaseId,
//         conf.appwriteCollectionId,
//         slug, //docu id
//         // object to be saved
//         {
//           title,
//           content,
//           featuredimage,
//           status,
//         }
//       );
// 		} catch (error) {
// 			console.log(error);
// 		}
// 	}

// 	async deletePost(slug) {
// 		try {
// 			await this.TablesDB.deleteRow(
//         conf.appwriteDatabaseId,
//         conf.appwriteCollectionId,
//         slug //docu id
//       );
// 			return true;
// 		} catch (error) {
// 			console.log(error);
// 			return false;
// 		}
// 	}

// 	async getPost(slug) {
// 		try {
// 			return await this.TablesDB.getRow(
//         conf.appwriteDatabaseId,
//         conf.appwriteCollectionId,
//         slug
//       );
// 		} catch (error) {
// 			throw error;
// 		}
// 	}
// 	// status hmari indexing h appwrite me
// 	async getPosts(queries = [Query.equal("status", "active")]) {
// 		try {
// 			return await this.TablesDB.listRows(
//         conf.appwriteDatabaseId,
//         conf.appwriteCollectionId,
//         queries
//         // [
//         //     Query.equal("status","active")
//         // ]
//         //<<<<<<<<<<<<<<<<<<<<<-------------- more functions read docs-------------->>>>>>>>>>>>>>>>.
//       );
// 		} catch (error) {
// 			throw error;
// 		}
// 	}

// 	// file upload methods
// 	// actual file blog deni h not name
// 	async uploadFile(file) {
// 		try {
// 			return await this.bucket.createFile(
// 				conf.appwriteBucketId,
// 				ID.unique(),
// 				file
// 			);
// 		} catch (error) {
// 			throw error;
// 		}
// 	}

// 	async deleteFile(fileId) {
// 		try {
// 			return await this.bucket.deleteFile(conf.appwriteBucketId, fileId);
// 			return true;
// 		} catch (error) {
// 			throw error;
// 			return false;
// 		}
// 	}

// 	// fast h to no use of async
// 	getPreviewFile(fileId) {
// 		try {
// 			return this.bucket.getFilePreview(conf.appwriteBucketId, fileId);
// 		} catch (error) {
// 			throw error;
// 		}
// 	}
// }

// const service = new Service();
// export default service;

import conf from "../conf/conf";
import { Client, ID, Storage, TablesDB, Query } from "appwrite";

//appwrite.io/docs/products/storage/quick-start

export class Service {
  client = new Client();
  databases;
  bucket;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);

    this.databases = new TablesDB(this.client);
    this.bucket = new Storage(this.client);
  }

  async createPost({ title, slug, content, featuredimage, status, userId }) {
    try {
      return await this.databases.createRow({
        databaseId: conf.appwriteDatabaseId,
        tableId: conf.appwriteCollectionId,
        rowId: slug, // docu id
        // object to be saved
        data: {
          title,
          content,
          featuredimage,
          status,
          userid: userId, // matches your Appwrite column
        },
      });
    } catch (error) {
      console.log(error);
    }
  }

  async updatePost(slug, { title, content, featuredimage, status }) {
    try {
      return await this.databases.updateRow({
        databaseId: conf.appwriteDatabaseId,
        tableId: conf.appwriteCollectionId,
        rowId: slug, // docu id
        // object to be saved
        data: {
          title,
          content,
          featuredimage,
          status,
        },
      });
    } catch (error) {
      console.log(error);
    }
  }

  async deletePost(slug) {
    try {
      await this.databases.deleteRow({
        databaseId: conf.appwriteDatabaseId,
        tableId: conf.appwriteCollectionId,
        rowId: slug, // docu id
      });
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  async getPost(slug) {
    try {
      return await this.databases.getRow({
        databaseId: conf.appwriteDatabaseId,
        tableId: conf.appwriteCollectionId,
        rowId: slug,
      });
    } catch (error) {
      throw error;
    }
  }

  // status hmari indexing h appwrite me
  async getPosts(queries = [Query.equal("status", "active")]) {
    try {
      return await this.databases.listRows({
        databaseId: conf.appwriteDatabaseId,
        tableId: conf.appwriteCollectionId,
        queries,
        // [
        //     Query.equal("status","active")
        // ]
        //<<<<<<<<<<<<<<<<<<<<<-------------- more functions read docs-------------->>>>>>>>>>>>>>>>.
      });
    } catch (error) {
      throw error;
    }
  }

  // file upload methods
  // actual file blog deni h not name
  async uploadFile(file) {
    try {
      return await this.bucket.createFile(
        conf.appwriteBucketId,
        ID.unique(),
        file
      );
    } catch (error) {
      throw error;
    }
  }

  async deleteFile(fileId) {
    try {
      await this.bucket.deleteFile(conf.appwriteBucketId, fileId);
      return true;
    } catch (error) {
      throw error;
      return false;
    }
  }

  // fast h to no use of async
  getPreviewFile(fileId) {
    try {
      return this.bucket.getFilePreview(conf.appwriteBucketId, fileId);
    } catch (error) {
      throw error;
    }
  }
}

const service = new Service();
export default service;