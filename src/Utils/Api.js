import axios from "axios";

export const fetchUsers = () => {
    return axios
    .get("https://nc-marketplace.herokuapp.com/api/users")
    .then((response) => {
        return response.data.users
    })
}