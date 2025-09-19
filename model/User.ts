export interface UserTypeRow {
    id_user: number | null;
    user_name: string;
    email: string;
    user_password: string;
    age: string;
    reservation: string;
}
export class User {
    protected id_user: number | null;
    protected user_name: string;
    protected email: string;
    protected user_password: string;
    protected age: string;
    protected reservation: string;

    constructor(
    id_user: number | null,
    user_name: string,
    email: string,
    user_password: string,
    age: string,
    reservation: string){
        this.id_user = id_user
        this.user_name = user_name
        this.email = email
        this.user_password = user_password
        this.age = age
        this.reservation = reservation
    }
}
static fromRow(row: UserTypeRow): User {
    return new User(
        row.id_user,
        row.user_name,
        row.email
        row.user_password
        row.age
        row.reservation 
    );
}
getId_user() {
    return this.id_user;

}
getUser_name() {
    return this.user_name;

}
getEmail() {
    return this.email;

}

getUser_password() {
    return this.user_password;

}
getAge() {
    return this.Age;

}

getReservation() {
    return this.reservation;

}