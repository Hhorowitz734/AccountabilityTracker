import { Component } from "react";
import Navbar from "../components/navbar";

interface GoalsHomePageProps {
    
}

class GoalsHomePage extends Component<GoalsHomePageProps> {

    constructor(props: GoalsHomePageProps){ 
        super(props);
    }


    render() {
        return (
            <div className="bg-[#54d4a6] h-screen w-full">
                <Navbar main_page= 'goals' />
            </div>
        )
    }
}

export default GoalsHomePage;