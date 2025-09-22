import { Repository } from "../libs/Repository";
import { User } from "../model/User";
import { UserBrowseView, UserBrowseViewTypeRow } from "../model/views/UserBrowseView";
import { UserReadView, UserReadViewTypeRow } from "../model/views/UserReadView";

export class UserRepository extends Repository {
    findAll = async(): Promise<User[]> => {
        const query = {
            name: "fetch-all-user",
            text: `SELECT 
                    id_user, user_name, email, age, reservation,
                    count(reservation) as user_reservation
                    FROM user
                    JOIN id_user ON id_user.id_reservation = id GROUP BY id`,
                     
        };
        const result = await this.pool.query<UserBrowseViewTypeRow>(query);
        const users = result.rows.map((row) => UserBrowseView.fromRow(row));
        return users;
    };
}