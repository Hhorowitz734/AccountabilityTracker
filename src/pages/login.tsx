import { Component } from 'react';

import { getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

import CtoButton from '../components/cto_button';
import Navbar from '../components/navbar';

import { FaGoogle } from 'react-icons/fa';


interface LoginPageProps {
    
}

interface LoginPageState {
    register: boolean;
    authing: boolean;
    email: string;
    password: string;
}



class LoginPage extends Component<LoginPageProps, LoginPageState>{
    auth: any; //Auth is a firebase thing so idk what to assign its type as

    constructor(props: LoginPageProps){
        super(props);

        this.state = {
            register: false,
            authing: false,
            email: '',
            password: ''
        }

        this.auth = getAuth();

        this.Form = this.Form.bind(this);
        this.TopText = this.TopText.bind(this);
    }

    RegisterUserAccount = async () => {

        const {email, password} = this.state;
        createUserWithEmailAndPassword(this.auth, email, password)

        .then((userCredential) => {
            const user = userCredential.user;
            console.log('user created: ', user)
            window.location.href = '/goals';
        })
        .catch((error) => {
            console.log('error: ', error);
        })
         
    }

    SignIntoUserAccount = async () => {
        const {email, password} = this.state;
        signInWithEmailAndPassword(this.auth, email, password)
        
        .then((userCredential) => {
            const user = userCredential.user;
            console.log('user created: ', user)
            window.location.href = '/goals';
        })
        .catch((error) => {
            console.log('error: ', error);
        })
    }

    SignInWithGoogle = async () => {

        this.setState({authing: true});

        signInWithPopup(this.auth, new GoogleAuthProvider())

        .then(response => {
            console.log(response.user.uid);
            window.location.href = '/goals';

        }).catch(error => {
            console.log(error);
            this.setState({authing: false})
        })

    }

    TopText() {

        const register = this.state.register;

        return (
            <div className='ml-4'>
                <h1 className='text-5xl font-bigfont mt-2'>{`${register ? 'Say hello to Goalie.' : 'Take a shot at success with Goalie.'}`}</h1>
                <h1 className='text-lg font-smallfont font-bold mt-2'>Enter your details and go set some goals!</h1>
            </div>
        )
    }

    Form() {

        const register = this.state.register;

        return(
            <div className='mt-8 ml-4'>
                <input className='border w-2/3 h-10 rounded-3xl font-smallfont font-bold px-3' placeholder = 'Enter your email'
                onChange={(event) => this.setState({ email: event.target.value })}></input>
                <input className='border w-2/3 h-10 rounded-3xl font-smallfont font-bold px-3 mt-2' placeholder = 'Password' type='password'
                onChange={(event) => this.setState({ password: event.target.value })}></input>
                <h1 className={`font-smallfont mt-2 ml-1 hover:underline cursor-pointer ${register ? 'hidden' : ''}`}>Forgot your password?</h1>
            </div>
        )
    }

    
    render() {

        const {register} = this.state;

        return(
            <div className='w-full h-screen pr-2 pl-2 pb-2 bg-[#54d4a6] flex flex-col justify-center items-center'>
                <div className='align-left w-full'><Navbar main_page='' /></div>
                <div className='w-2/3 md:w-1/2 lg:w-1/3 h-5/6 m-auto bg-black border-3 border-b-transparent border-white rounded-3xl pr-3 pb-3'>
                    <div className='w-full h-full bg-white rounded-3xl pl-2 pt-2'>
                        <this.TopText />
                        <this.Form />
                        <div className='flex items-center'>
                            <div className='w-1/3 mt-4 ml-4'>
                                <CtoButton text = {`${register ? 'Register' : 'Sign In'}`} action = {register ? this.RegisterUserAccount : this.SignIntoUserAccount} />
                            </div>
                            <div className='w-1/3 mt-4 ml-4'>
                                <div className="bg-black hover:pr-1 hover:pb-1 rounded-full cursor-pointer transition duration-150 h-full">
                                    <div className="rounded-full uppercase bg-[#54d4a6] p-4 font-smallfont font-bold text-center h-full items-center justify-center flex text-xl"
                                    onClick = {this.SignInWithGoogle}><FaGoogle /></div>
                                </div>
                            </div>
                        </div>
                        <div className='text-lg font-smallfont font-bold ml-4 mt-4 hover:underline cursor-pointer'
                        onClick = {() => {this.setState({register : !register})}}>{register ? 'Have an account?' : "Don't have an account?"}</div>
                   </div>
                </div>
            </div>

        )
    }

}

export default LoginPage;