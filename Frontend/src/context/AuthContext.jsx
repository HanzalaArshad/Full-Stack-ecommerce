import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

const provider = new GoogleAuthProvider();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const registerUser = async (email, password) => {
    try {
      return await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error("Registration error: ", error);
      throw error;
    }
  };

  const login = async (email, password) => {
    try {
      return await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error("Login error: ", error);
      throw error;
    }
  };

  const signInwithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      // Handle the result (e.g., get user information)
      const user = result.user;
      const userData = {
        email: user.email,
        userName: user.displayName || "User", // Fallback if displayName is not set
        photo: user.photoURL || "/path/to/default/avatar.png", // Default avatar if no photo is set
      };
      setCurrentUser(userData);
    } catch (error) {
      console.error("Google sign-in error: ", error);
      throw error;
    }
  };

  const Logout = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setLoading(false);
      if (user) {
        const { email, displayName, photoURL } = user;
        const userData = {
          email,
          userName: displayName, // Fallback if displayName is not set
          photo: photoURL  // Default avatar if no photo is set
        };
        setCurrentUser(userData);
      } else {
        setCurrentUser(null);
      }
    });
  
    return () => unsubscribe();
  }, []);
  

  const value = {
    currentUser,
    loading,
    registerUser,
    login,
    signInwithGoogle,
    Logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
