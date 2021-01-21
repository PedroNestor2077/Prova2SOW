var UsersList=[]
const Mydb="http://localhost:5000/usuarios"
async function getUsers(){
    return fetch(Mydb)
}
export async function ExportUsers (){
    const UsersResponse=await getUsers();
    const MyUsers=await UsersResponse.json()
    UsersList=await MyUsers
}
ExportUsers()
export {UsersList}


    

