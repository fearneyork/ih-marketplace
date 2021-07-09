import { useEffect, useState, useContext } from "react";
import "./SelectUser.css";
import { UserContext } from "../../contexts/User"
import { fetchUsers } from "../../Utils/Api"

const SelectUser = () => {
    const [ users, setUsers ] = useState([]);
    const { setUser } = useContext(UserContext);

    useEffect(() => {
        fetchUsers().then((usersFromApi) => {
            setUsers(usersFromApi)
        })
    }, [])

    return (
        <main className="UsersList">
            <h1>
            Change User
            </h1>
            <ul className="UsersList_user">
                {users.map(user => {
                    return (
                        <li className="UserList_card" key={user.username}>
                            <h2>
                                {user.username}
                            </h2>
                            <img className="user-avatar" src={user.avatar_url} alt={user.username}></img>
                            <button className="ChangeUserButton" onClick={() => {
                                // loginAsUser(user)
                            }}>Select</button>
                        </li>
                    )
                })}
            </ul>
        </main>
    );
};

export default SelectUser;