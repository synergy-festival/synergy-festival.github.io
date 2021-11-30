import firebaseApp from './config'
import { getFirestore, collection, addDoc } from 'firebase/firestore';


  const addNewEmail = async (type, email) => {
    const collectionRef = collection(getFirestore(firebaseApp), 'subscriber');
    const docRef = await addDoc(collectionRef, { email, type });
    console.log("The new ID is: " + docRef.id);
  };

  export default addNewEmail