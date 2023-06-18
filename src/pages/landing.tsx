import { Component } from 'react';

import CtoButton from '../components/cto_button';
import Navbar from '../components/navbar';

interface LandingPageProps {
    
}

class LandingPage extends Component {

    constructor(props: LandingPageProps){
        super(props);
    }

    TopSlot() {
        return (
            <div className='h-screen px-2'>
                <div className='h-5/6 w-full border-b rounded-b-3xl bg-white'>

                    <Navbar main_page='' />

                    <div className='flex w-full justify-center'>
                        <div className='w-1/2 flex justify-center text-center uppercase text-8xl font-bigfont mt-16 select-none'>Your goals are our mission.</div>
                    </div>

                    <div className='flex w-full justify-center mt-16'>
                        <CtoButton text = {'Get Accountable'} action = {() => {window.location.href = '/login'}}/>
                    </div>

                </div>
            </div>
        )
    }


    MidSlot() {
        return (
            <div className='h-64 w-full'>
            </div>
        )
    }


    BottomSlot() {
        return(
            <div className='flex flex-col px-2'>
                <div className='h-screen w-full border-t rounded-t-3xl bg-white'>
                    
                </div>
            </div>
        )
    }


    render() {
        return(
            <div className='flex flex-col w-full h-max bg-[#54d4a6] overflow-y-hidden'>
                <this.TopSlot />
                <this.MidSlot />
                <this.BottomSlot />
            </div>
        )
    }
}

export default LandingPage;