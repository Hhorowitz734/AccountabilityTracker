import { Component } from "react";

interface GoalsHomePageProps {
    
}

class GoalsHomePage extends Component<GoalsHomePageProps> {

    constructor(props: GoalsHomePageProps){ 
        super(props);
    }

    Navbar() {
        return( //Change px-4 to px-6 to match other pages
            <div className='py-1 px-4'>
                <div className='text-3xl font-smallfont font-semibold cursor-pointer'
                onClick = {() => {window.location.href = '/'}}>Goalie</div>
            </div>
        )
    }

    render() {
        return (
            <div className="bg-[#54d4a6] h-screen w-full">
                <this.Navbar />
            </div>
        )
    }
}

export default GoalsHomePage;