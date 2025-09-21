import { User } from "../User"

export interface UserBrowseViewTypeRow {
    id_user: number | null;
    user_name: string;
    email: string;
    user_password: string;
    age: string;
    reservation: string;
    reservationCount:number;
}

export class UserBrowseView extends User {
    protected reservationCount: number;

    constructor(
        id_user: number | null,
        user_name: string,
        email: string,
        user_password: string,
        age: string,
        reservation: string,
        reservationCount: number
    ) {
        super(id_user, user_name, email, user_password, age, reservation)
        this.reservationCount = reservationCount
    }

    static formRow(row: UserBrowseViewTypeRow): UserBrowseView {
        return new UserBrowseView(
            row.id_user,
            row.user_name,
            row.email,
            row.user_password,
            row.age,
            row.reservation,
            row.reservationCount
        )
    }
}