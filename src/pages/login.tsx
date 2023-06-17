import { Component } from 'react';

import CtoButton from '../components/cto_button';

import { FaGoogle } from 'react-icons/fa';


interface LoginPageProps {
    
}

interface LoginPageState {
    register: boolean;
}

class LoginPage extends Component<LoginPageProps, LoginPageState>{

    constructor(props: LoginPageProps){
        super(props);

        this.state = {
            register: false
        }

        this.Form = this.Form.bind(this);
    }

    Navbar() {
        return(
            <div className='py-1 px-4 w-full'>
                <div className='text-3xl font-smallfont font-semibold cursor-pointer'
                onClick={() => {window.location.href = '/'}}>Goalie</div>
            </div>
        )
    }

    TopText() {
        return (
            <div className='ml-4'>
                <h1 className='text-5xl font-bigfont mt-2'>Say hello to Goalie.</h1>
                <h1 className='text-lg font-smallfont font-bold mt-2'>Enter your details and go set some goals!</h1>
            </div>
        )
    }

    Form() {

        const register = this.state.register;

        return(
            <div className='mt-8 ml-4'>
                <input className='border w-2/3 h-10 rounded-3xl font-smallfont font-bold px-3' placeholder = 'Enter your email'></input>
                <input className='border w-2/3 h-10 rounded-3xl font-smallfont font-bold px-3 mt-2' placeholder = 'Password' type='password'></input>
                <h1 className={`font-smallfont mt-2 ml-1 hover:underline cursor-pointer ${register ? 'hidden' : ''}`}>Forgot your password?</h1>
            </div>
        )
    }

    
    render() {

        const {register} = this.state;

        return(
            <div className='w-full h-screen p-2 bg-[#54d4a6] flex flex-col justify-center items-center'>
                <this.Navbar />
                <div className='w-2/3 md:w-1/2 lg:w-1/3 h-5/6 m-auto bg-black border-3 border-b-transparent border-white rounded-3xl pr-3 pb-3'>
                    <div className='w-full h-full bg-white rounded-3xl pl-2 pt-2'>
                        <this.TopText />
                        <this.Form />
                        <div className='flex items-center'>
                            <div className='w-1/3 mt-4 ml-4'>
                                <CtoButton text = {`${register ? 'Register' : 'Sign In'}`} action = {() => {}} />
                            </div>
                            <div className='w-1/3 mt-4 ml-4'>
                                <div className="bg-black hover:pr-1 hover:pb-1 rounded-full cursor-pointer transition duration-150 h-full">
                                    <div className="rounded-full uppercase bg-[#54d4a6] p-4 font-smallfont font-bold text-center h-full items-center justify-center flex text-xl"
                                    onClick = {() => {}}><FaGoogle /></div>
                                </div>
                            </div>
                        </div>
                        <div className='text-lg font-smallfont font-bold ml-4 mt-4 hover:underline cursor-pointer'
                        onClick = {() => {this.setState({register : !register})}}>Don't have an account?</div>
                   </div>
                </div>
            </div>

        )
    }

}

export default LoginPage;