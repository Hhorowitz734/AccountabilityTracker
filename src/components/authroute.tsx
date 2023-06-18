import React, {useEffect, useState} from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

interface IAuthRouteProps {
    children: any;
};

const AuthRoute: React.FunctionComponent<IAuthRouteProps> = props => {

    const { children } = props;
    const auth = getAuth();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        AuthCheck();

    }, [auth]);

    const AuthCheck = onAuthStateChanged(auth, (user) => {
        if (user) {
            setLoading(false);
        } else {
            console.error('Unauthorized. [THIS IS A DEV-GENERATED MESSAGE]');
            window.location.href = '/login';
        }
    });

    if (loading) return (<div>loading...</div>)

    return (
       <>{children}</>
    )
}

export default AuthRoute;