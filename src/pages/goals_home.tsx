import { Component } from "react";
import Navbar from "../components/navbar";
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from 'react-icons/ai';
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

        //Temporary style for sample pfp
        this.imageUrl = 'https://media-cldnry.s-nbcnews.com/image/upload/newscms/2021_10/3447876/210205-jacob-chansley-mc-1142.JPG';
        this.divStyle = {
          backgroundImage: `url(${this.imageUrl})`,
        }


        this.state = {
          pageState: "default",
        }

        this.LeftBar = this.LeftBar.bind(this);
        this.RightBar = this.RightBar.bind(this);
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
                <div className="flex items-center border-transparent border-b border-b-gray-400 pb-1"><h1 className="font-smallfont text-3xl font-bold">Take a huge shit on Nancy Pelosi's Desk</h1><div className="h-full bg-green-200 hover:bg-green-400 transition duration-150 p-2 rounded-full ml-2 text-2xl"><AiOutlineCheckCircle /></div></div>
                    
                  <div className="grid grid-cols-2 mt-2">
                    <div className="flex items-center rounded-lg w-11/12 m-auto px-2 h-12 bg-red-300 hover:bg-red-400 transition duration-150">
                      <div className="w-10 h-10 rounded-full bg-cover" style={this.divStyle}></div>
                      <h1 className="text-2xl font-smallfont font-bold ml-2">Donald</h1>
                      <h1 className="text-2xl rounded-full ml-auto"><AiOutlineCloseCircle /></h1>
                    </div>
                    <div className="flex items-center rounded-lg w-11/12 m-auto px-2 h-12 bg-red-300 hover:bg-red-400 transition duration-150">
                      <div className="w-10 h-10 rounded-full bg-cover" style={this.divStyle}></div>
                      <h1 className="text-2xl font-smallfont font-bold ml-2">Alvin</h1>
                      <h1 className="text-2xl rounded-full ml-auto"><GiClosedBarbute /></h1>
                    </div>
                  </div>
                  <h1 className="font-smallfont ml-auto text-2xl font-bold text-black text-center mt-2">January 6</h1>

              </div>
            </div>
          </div>
          
        </div>
      )
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
          <div className="h-1/2 w-full">w</div>
        </div>
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