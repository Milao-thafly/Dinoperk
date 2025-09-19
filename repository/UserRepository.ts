import { Repository } from "../libs/Repository";


export class UserRepository extends Repository {
    findAll = async(): Promise<User[]> => {
        const query = {
            name: "fetch-all-user",
            text: `SELECT 
                    id_user, user_name, email, age, reservation,
                    count(reservation) as user_reservation
                    FROM user
                    JOIN id_user ON id_user.id_reservation = id GROUP BY id`,
                    values: [id], 
        };
        try {
            const result = await this.pool.query<UserReadViewTypeRow>(query);

            if(result.row[0]) {
                const reservation = UserReadView.fromRow(result.row[0]);

                return reservation;
            } else {
                return null;
            }
        }catch(error) {
            console.log(error)
        }
        return null;
    };
}