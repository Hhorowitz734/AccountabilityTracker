import { Component } from "react";

import Navbar from "../components/navbar";
import LeftBar from "../components/goals_home_components/leftbar";

import {GiClosedBarbute} from 'react-icons/gi'

interface GoalsHomePage {
  imageUrl: string;
  divStyle: React.CSSProperties;
}

interface GoalsHomePageProps {
    
}

interface GoalsPageStates {
  pageState: "default" | "active" | "create" | "watching" | "feed";
}

class GoalsHomePage extends Component<GoalsHomePageProps, GoalsPageStates> {

    constructor(props: GoalsHomePageProps){ 
        super(props);

        this.state = {
          pageState: "default",
        }

        this.RightBar = this.RightBar.bind(this);
    }

    changeState(newPageState: GoalsPageStates["pageState"]) {
      this.setState({pageState : newPageState})
    }

    RightBar(){
      return(
        <div className="p-8 h-full">
          <div className="h-1/2 w-full">
            <div className="bg-black w-full h-full rounded-3xl pr-3 pb-3 border-white border-3 border-b-transparent">
              <div className="flex rounded-3xl bg-white h-full w-full pl-2 pt-2 transition duration-150">
                <h1 className="text-8xl w-3/5 pt-16 pl-10 font-bigfont">Keep score</h1>
                <div className="rounded-xl bg-[#E1D12B] w-1/3 h-2/3 my-auto py-4">

                  <div className="flex items-center rounded-lg w-11/12 m-auto bg-gray-100 h-12 px-2">
                    <div className="w-10 h-10 rounded-full bg-cover" style={this.divStyle}></div>
                    <h1 className="text-2xl font-smallfont font-bold ml-2">Alvin</h1>
                    <h1 className="text-2xl rounded-full ml-auto"><GiClosedBarbute /></h1>
                  </div>

                  <div className="flex items-center rounded-lg w-11/12 m-auto bg-gray-100 h-12 px-2 mt-2">
                    <div className="w-10 h-10 rounded-full bg-cover" style={this.divStyle}></div>
                    <h1 className="text-2xl font-smallfont font-bold ml-2">Alvin</h1>
                    <h1 className="text-2xl rounded-full ml-auto"><GiClosedBarbute /></h1>
                  </div>

                  <div className="flex items-center rounded-lg w-11/12 m-auto bg-gray-100 h-12 px-2 mt-2">
                    <div className="w-10 h-10 rounded-full bg-cover" style={this.divStyle}></div>
                    <h1 className="text-2xl font-smallfont font-bold ml-2">Alvin</h1>
                    <h1 className="text-2xl rounded-full ml-auto"><GiClosedBarbute /></h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="h-1/2 w-full">
            <div className="bg-black w-full h-full rounded-3xl pr-3 pb-3 border-white border-3 border-b-transparent">
              <div className="flex rounded-3xl bg-white h-full w-full pl-2 pt-2 transition duration-150">
                <h1 className="text-8xl w-3/5 pt-16 pl-10 font-bigfont">Your Profile</h1>
                
              </div>
            </div>
          </div>
        </div>
      )
    }


    render() {



    return (
      <div className="bg-[#54d4a6] h-screen w-full flex flex-col">

        <Navbar main_page="goals" />

        <div className="flex w-full flex-grow">

          <LeftBar />

          <this.RightBar />

        </div>

      </div>
      );
    }
}

export default GoalsHomePage;