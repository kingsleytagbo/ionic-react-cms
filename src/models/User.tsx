class User{
    public id:string = '';
    public user_nicename:string;
    public  user_pass:string;

    constructor(username: string, password:string){
        this.user_nicename = username;
        this.user_pass = password;
    }
}

export default User;