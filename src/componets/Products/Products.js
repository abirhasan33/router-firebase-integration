import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';
// import useFirebase from '../../hooks/useFirebase';


const auth = getAuth(app)
const Products = () => {
    const [user] = useAuthState(auth)
    return (
        <div>
            <h2>Knock knock ! who is there</h2>
            <p>{user? user.displayName: 'no VOOOOOOOOOdi'}</p>
        </div>
    );
};

export default Products;