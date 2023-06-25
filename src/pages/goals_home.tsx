import { Component } from "react";
import Navbar from "../components/navbar";

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

        //Temporary style for sample pfp
        this.imageUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Outdoors-man-portrait_%28cropped%29.jpg/1200px-Outdoors-man-portrait_%28cropped%29.jpg';
        this.divStyle = {
          backgroundImage: `url(${this.imageUrl})`,
        }


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
              <div className="rounded-3xl bg-white w-11/12 h-48 mx-auto my-16 p-4">
                <div className="flex items-center"><h1 className="font-smallfont text-2xl font-bold">Read "Convinience Store Woman"</h1><h1 className="font-smallfont ml-auto text-2xl font-bold text-red-500">August 14</h1></div>
                <div className="flex items-center rounded-lg bg-gray-400 py-2 px-1">
                  <div className="w-10 h-10 rounded-full bg-cover" style={this.divStyle}></div>
                  <h1 className="text-xl font-smallfont font-bold ml-4">Zubayer Jones</h1>
                  <div className="ml-auto font-smallfont">NOT COMPLETE</div>
                  <div className="ml-auto font-smallfont bg-[#E1D12B] px-2 py-1 rounded-lg">Remind</div>
                </div>
              </div>
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