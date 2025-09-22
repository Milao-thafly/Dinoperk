import { User } from "../User"  

export interface UserReadViewTypeRow {
        id_user: number | null;
    user_name: string;
    email: string;
    user_password: string;
    age: string;
    reservation: string;
    reservationCount:number;

}

export class UserReadView extends User {
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
    
        static formRow(row: UserReadViewTypeRow): UserReadView {
            return new UserReadView(
                row.id_user,
                row.user_name,
                row.email,
                row.user_password,
                row.age,
                row.reservation,
                row.reservationCount
            )
        }

        getReservationCount() {
            if (this.reservationCount <2) {
                return `${this.reservationCount} publication`;
            }
            return `${this.reservationCount}`
        }
}