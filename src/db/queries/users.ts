import db from "../db";

export const isUserLoggedIn = async (data : {username : string, password : string}) => {
    const respone = await db.users.findUnique({
      where : {
        username : data.username,
        password: data.password
      }
    })
    return respone;
}
