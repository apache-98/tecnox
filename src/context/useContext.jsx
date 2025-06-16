import { createContext, useContext, useEffect, useState } from "react";
import { users } from "../utils/Users.js"
import Swal from "sweetalert2";



const UserContext = createContext();


export const UserProvider = ({ children }) => {


    const [user, setUser] = useState(null);

    function login({ userNameExt, passwordExt }) {
        const userFound = users.find((user) => user.username === userNameExt && user.password === passwordExt)

        if (userFound) {
            localStorage.setItem("userLogged", JSON.stringify(userFound))
            setUser(userFound);
            return true;
        }
        else {
            return false;
        }

    }

    function logout() {
        localStorage.removeItem("userLogged");
        setUser(null)
        Swal.fire({
            icon: "success",
            title: "Cierre Exitoso",
            text: ""
        });

    }

    useEffect(
        () => {
            const stored = JSON.parse(localStorage.getItem("userLogged"))
            setUser(stored);
        }, []
    );

    return (
        <UserContext.Provider value={{ user, login, logout }} >
            {children}


        </UserContext.Provider>


    )

}

export function useUser() {

    return useContext(UserContext);
}
