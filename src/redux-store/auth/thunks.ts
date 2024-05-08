import { singInWithGoogle } from '../../firebase/providers';
import { checkCredentials, login, logout } from './authSlice';



export const checkAuthentication = ( email, password ) => {
  return async( dispatch ) => {
    dispatch( checkCredentials() );
  }
}


export const startGoogleSingin = () => {
  return async( dispatch ) => {
    dispatch( checkCredentials() );
    const result = await singInWithGoogle();
    //console.log(result);
    if (!result.ok) {
      return dispatch( logout( result.errorMessage ) );
    }
    dispatch( login( result ) );
  }
}

