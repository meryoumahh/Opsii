import {Account, Avatars, Client , Databases, ID,Query} from 'react-native-appwrite';
export const config = {
    endpoint:'https://cloud.appwrite.io/v1',
    platform:'com.jsm.opsii',
    projectId:'66396679002ded89f81c',
    databaseId:'663968890000dd27a2a6',
    userCollectionId:'663968ce000d748bea10',
    storageId:'66396a3b003dc025b5d6',
    videoCollectionId:'663ade80002324700803'
}

const client = new Client();

client 
    .setEndpoint(config.endpoint)
    .setProject(config.projectId)
    .setPlatform(config.platform)

const account = new Account (client);
const avatars = new Avatars (client);
const databases = new Databases(client);
export const createUser = async (email,password, username) =>{
    try{
        const newAccount = await account.create(
            ID.unique(),
            email,
            password,
            username
        )

        if(!newAccount) throw Error;

        const avatarUrl = avatars.getInitials(username)

        await signIn(email,password);

        const newUser = await databases.createDocument(
            config.databaseId,
            config.userCollectionId,
            ID.unique(),
            {
            accountId: newAccount.$id,
            email, 
            username,
            avatar: avatarUrl
    })
    return newUser;
    }catch(error){
        console.log(error);
        throw new Error(error);
    }
    }



/*export const signIn = async (email, password) => {
    try{
        const session = await account.createEmailPasswordSession(email, password)
        return session;
    }catch (error) {
        console.log(error);
        throw new Error (error);
    }
}

export const getCurrentUser = async()=>{
    try{
        const currentAccount= await account.get();

        if(!currentAccount) throw Error;

        const currentUser = await databases.listDocuments(
            config.databaseId,
            config.userCollectionId,
            [Query.equal('accountId', currentAccount.$id)]
          );

          if (!currentUser) throw Error;

          return currentUser.documents[0];
    }catch(error){
        console.log(error);
    }
}*/

