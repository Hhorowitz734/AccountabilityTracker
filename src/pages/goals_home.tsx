import { Component } from "react";
import Navbar from "../components/navbar";

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

        this.LeftBar = this.LeftBar.bind(this);
    }

    changeState(newPageState: GoalsPageStates["pageState"]) {
      this.setState({pageState : newPageState})
    }



    LeftBar() {

      const { pageState } = this.state;
      console.log(pageState);

      return(
        <div className="flex p-8">
          <div className={`rounded-3xl bg-black border-3 border-b-transparent border-[#E1D12B] pr-3 pb-3 w-full cursor-pointer ${pageState === 'default' ? '' : 'hidden'}`}
          onClick = {() => this.changeState('active')}>
            <div className="rounded-3xl bg-[#E1D12B] h-full w-full pl-2 pt-2 transition duration-150">
              <div className="text-8xl w-full pt-16 pl-10 font-bigfont">Watch the goal!</div>
              <div className="rounded-3xl bg-white w-11/12 h-48 mx-auto my-16"></div>
            </div>
          </div>
          
        </div>
      )
    }

    RightBar(){
      return(
        <div className="flex">hi</div>
      )
    }


    render() {



    return (
      <div className="bg-[#54d4a6] h-screen w-full flex flex-col">

        <Navbar main_page="goals" />

        <div className="grid grid-cols-2 w-full flex-grow">

          <this.LeftBar />

          <this.RightBar />

        </div>

      </div>
      );
    }
}

export default GoalsHomePage;