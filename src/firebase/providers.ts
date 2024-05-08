import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { firebaseAuth } from './config';


const googleProvider = new GoogleAuthProvider();

export const singInWithGoogle = async () => {
  try {

    const result = await signInWithPopup( firebaseAuth, googleProvider );
    //const credentials = GoogleAuthProvider.credentialFromResult( result );
    //console.log(credentials);

    //const user = result.user;
    //console.log(user);

    const { displayName, email, photoURL, uid } = result.user;
    console.log(displayName);
    return {
      ok: true,
      displayName,
      email,
      photoURL,
      uid,
    }

  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage);

    return {
      ok: false,
      errorCode,
      errorMessage,
    }
  }
}