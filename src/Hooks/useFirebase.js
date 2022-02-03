import { useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import initializeAutentication from '../pages/Login/Firebase/firebase.init';


initializeAutentication();

const useFirebase = () => {
    // email,password autentication
    const auth = getAuth();

    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    // console.log(user);

    // state declare for set email and password from input field
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // event handler for get value from input field and set in state
    const handleEmail = e => {
        setEmail(e.target.value);
    }

    const handlePassword = e => {
        setPassword(e.target.value);
    }

    // create user registration
    const createUserRegistration = e => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                setUser(user);

            })
            .catch(error => {

                setError(error.message);
            })

        e.preventDefault();
    }


    // login with email and password
    const loginUser = () => {

        return signInWithEmailAndPassword(auth, email, password)

    }


    // logout user
    const logOutUser = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
    }


    // firebase observer whether user auth state changed or not
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)

            } else {
                setUser({})
            }
            setIsLoading(false);
        });
    }, [])

    return {
        user,
        handleEmail,
        handlePassword,
        createUserRegistration,
        loginUser,
        logOutUser,
        isLoading

    }

}



export default useFirebase;