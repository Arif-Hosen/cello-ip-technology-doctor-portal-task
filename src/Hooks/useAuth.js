import { useContext } from "react"
import { AuthContext } from "../context/AuthProvider"

// useAuth hook create
const useAuth = () => {
    return useContext(AuthContext);
}

export default useAuth;