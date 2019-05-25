export class User {
    firstName: string;
    lastName: string;
    password: string;
    userName: string;
    email: string;
    constructor(userName: string, firstName: string, lastName: string, email: string, password: string) {
        this.email = email;
        this.password = password;
        this.userName = userName;
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
