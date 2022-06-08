import { useState } from "react";
import initializeFirebase from "../Pages/Login/firebase/firebase.inti";

// initialize Firebase app
initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});

    return {
        user,
    }
}

export default useFirebase;