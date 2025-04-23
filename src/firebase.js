import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyB4Ax1mAz8xfCznCCqPJbRqUUSGHdCIfP4",
  authDomain: "netflix-clone-e5e75.firebaseapp.com",
  projectId: "netflix-clone-e5e75",
  storageBucket: "netflix-clone-e5e75.firebasestorage.app",
  messagingSenderId: "744245729255",
  appId: "1:744245729255:web:8c906abdd9122093cf0f42",
  measurementId: "G-SV3PPVEJGB"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);



const signup = async (name,email,password)=>{
    try{
        const res = await createUserWithEmailAndPassword(auth,email,password);
        const user = res.user;
        await addDoc(collection(db,"user") , {
            uid : user.uid,
            name,
            authProvider:"local",
            email,


        });

    }catch(error){
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));

    }

}


const login = async(email,password)=>{
    try{
       await  signInWithEmailAndPassword(auth,email,password)
    }
    catch(error){
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}


const logout = ()=>{
    signOut(auth);
}







export {auth,db,login,signup,logout};