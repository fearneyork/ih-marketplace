import { useEffect, useState, useContext } from "react";
import "./SelectUser.css";
import { UserContext } from "../../contexts/User"
import { fetchUsers } from "../../Utils/Api"

const SelectUser = () => {
    const { user, setUser } = useContext(UserContext)

    
}