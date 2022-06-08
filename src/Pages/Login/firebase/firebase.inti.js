import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializeFirebase = () => {
    initializeApp(firebaseConfig);
}

export default initializeFirebase;


/* 
steps for authentication

    step-1: Initial Setup
--------------------------------
1. firebase: create project
2. create web app
3. get configuration
4. initializeFirebase
5. enable auth method
--------------------------------

step-2: setup Component
------------------------------------------------
1. create login component
2. create register component
3. create route for login and register component
------------------------------------------------


step-3: set auth system
-------------------------------------------------------
1. setup sign in method
2.  setup sign out method
3. user state
4. special observer
5. return necessary methods and states from useFirebase
-------------------------------------------------------

step-4: create auth context hook
----------------------------------------------------------------
1. create a auth context
2. create a auth context provider
3. set context provider context value
4. 

*/