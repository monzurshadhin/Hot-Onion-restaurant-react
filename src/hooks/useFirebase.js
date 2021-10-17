import {
  createUserWithEmailAndPassword, FacebookAuthProvider, getAuth, GithubAuthProvider, GoogleAuthProvider,
  onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail,
  signInWithEmailAndPassword, signInWithPopup,
  signOut, updateProfile
} from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseAuthentication from "../components/Login/Firebase/firebase.init";

firebaseAuthentication();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message,setMessage] = useState("");
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const registerNewUsers = (e) =>{
    e.preventDefault();
    console.log("register")
    if (password.length < 6) {
      // setError("password must be at least 6 character long");
      // setMessage("");
      console.log("length")
      return;
    }
    if (!/(?=.*?[A-Z])/.test(password)) {
      // setError("password must be at least 1 upper case latter");
      // setMessage("");
      console.log("password")

      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
  .then((result) => {
    updateBasicInfo();
    veryfyEmail();
    setMessage('Successfully register');
    logOut();
  })
  // .catch((error) => {
  //   setMessage('register faild');
  // });
  }
  const veryfyEmail = () => {
    sendEmailVerification(auth.currentUser).then(() => {
      
    });
  };
  const updateBasicInfo = () => {
    updateProfile(auth.currentUser, {
      displayName: name,
    })
      .then(() => {})
      .catch((error) => {});
  };
  
  const signInUsingGoogle = () => {
    setIsLoading(true);
    return signInWithPopup(auth, googleProvider)
      
  };

  const loginProcess = () => {
    
    return signInWithEmailAndPassword(auth, email, password)
    
  };

  const handleResetPassword = () =>{
    sendPasswordResetEmail(auth, email)
  .then(() => {
    setMessage('Password reset mail sent to your email');
  })
}

  const signInUsingFacebook = () => {
    setIsLoading(true);
    return signInWithPopup(auth, facebookProvider)
      
  };
  const signInUsingGithub = () =>{
    return signInWithPopup(auth, githubProvider)
  
  }

  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {})
      .finally(() => {
        setIsLoading(false);
      });
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
  }, []);
  return {
    signInUsingGoogle,
    user,
    logOut,
    isLoading,
    signInUsingFacebook,
    signInUsingGithub,
    handleName,
    handleEmail,
    handlePassword,
    registerNewUsers,
    loginProcess,
    handleResetPassword,
    message,
    setIsLoading,
    setUser,
    setMessage
  };
};
export default useFirebase;
