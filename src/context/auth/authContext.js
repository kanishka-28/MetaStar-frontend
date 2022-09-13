import { useContext, createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged, FacebookAuthProvider, TwitterAuthProvider, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from '../../firebase'
import { addDoc, collection, getDocs, Timestamp } from "firebase/firestore";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  
  const [user, setuser] = useState({
    displayName: '',
    email: '',
  })
  const [isLogin, setIsLogin] = useState(false);

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
    setIsLogin(true);
  }
  
  const facebookSignIn = () => {
    const provider = new FacebookAuthProvider();
    signInWithPopup(auth, provider)
    setIsLogin(true);
  }
  
  const twitterSignIn = () => {
    const provider = new TwitterAuthProvider();
    signInWithPopup(auth, provider)
  }
  
  const EmailSignIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password);
  }
  
  const EmailSignUp = (email, password, name, mobile) => {
    createUserWithEmailAndPassword(auth, email, password).then(async(userCredential) => {
      const user = userCredential.user;
      console.log(user);
      const userCollectionRef = collection(db, 'users');
      await getDocs(userCollectionRef).then((res) => {
        const users = res?.docs?.map((doc) => (
          {
            data: doc.data(),
            id: doc.id,
          })
          )
          users.map((user) => {
            if (user?.data?.email === email) {
              value = true;
              return;
          }
        })
      })
      !value && await addDoc(collection(db, "users"), {
        email: email,
        name: name,
        mobile: mobile,
        created: Timestamp.now()
      },
        {
          merge: true
        }
        )
        console.log('User ', user);
      })
      setIsLogin(true);
    }
    
  const logout = () => {
    signOut(auth);
  }


  let value = false;
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setuser(currentUser)
      const userCollectionRef = collection(db, 'users');
      // piece of cake
      await getDocs(userCollectionRef).then((res) => {
        const users = res?.docs?.map((doc) => (
          {
            data: doc.data(),
            id: doc.id,
          })
        )
        users.map((user) => {
          if (user?.data?.email === currentUser?.email) {
            value = true;
            return;
          }
        })
      })
      !value && await addDoc(collection(db, "users"), {
        email: currentUser?.email,
        name: currentUser?.displayName,
        photo: currentUser?.photoURL,
        created: Timestamp.now()
      },
        {
          merge: true
        }
      )
      console.log('User ', currentUser);
    })
    return () => {
      unsubscribe();
    }
  }, [])

  return (
    <AuthContext.Provider value={{ googleSignIn, logout, user, facebookSignIn, twitterSignIn, EmailSignUp, EmailSignIn, isLogin }}>
      {children}
    </AuthContext.Provider>
  )
}

export const UserAuth = () => {
  return useContext(AuthContext)
}