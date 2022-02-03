import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializeAutentication = () => {
    const app = initializeApp(firebaseConfig);
}

export default initializeAutentication;