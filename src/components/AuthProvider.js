
import React from 'react';
import { createContext } from 'react';
import Blog from './Blog';

const AuthProvider = (props) => {
    const AuthContext = createContext();
    return (
        <div>
            <AuthContext.Provider value={props.post}>
                <Blog/>
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;