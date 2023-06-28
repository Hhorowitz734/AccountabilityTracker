import { Component } from 'react';

import { AiOutlineCheckCircle, AiOutlineCloseCircle } from 'react-icons/ai';

interface LeftBarProps {
    
};

interface LeftBarStates {
    barState: "default" | "active" | "hidden";
    profilePicBackgroundImage: string;
}

class LeftBar extends Component<LeftBarProps, LeftBarStates> {

    constructor(props: LeftBarProps){
        super(props);

        //TEMPORARY -> REMOVE THIS IN THE FUTURE
        const imageUrl = 'https://media-cldnry.s-nbcnews.com/image/upload/newscms/2021_10/3447876/210205-jacob-chansley-mc-1142.JPG';

        this.state = {
            barState: 'default', //State of the leftbar
            profilePicBackgroundImage: `url(${imageUrl})`,
        }
    }

    //Changes the state of the leftbar
    changeState(newBarState: LeftBarStates["barState"]) {
        this.setState({barState : newBarState})
    }

    render() {
        
        const {barState, profilePicBackgroundImage} = this.state;

        return (
            <div className="flex p-8 w-[55%]">
            <div className={`rounded-3xl bg-black border-3 border-b-transparent border-[#E1D12B] pr-3 pb-3 w-full cursor-pointer ${barState === 'default' ? '' : 'hidden'}`}
            onClick = {() => this.changeState('active')}>
              <div className="rounded-3xl bg-[#E1D12B] h-full w-full pl-2 pt-2 transition duration-150">
                <div className="text-8xl w-full pt-16 pl-10 font-bigfont">Watch the goal!</div>
                <div className="rounded-3xl bg-white w-11/12 h-48 mx-auto my-16 p-4">
                  <div className="flex items-center border-transparent border-b border-b-gray-400 pb-1"><h1 className="font-smallfont text-3xl font-bold">Take a huge shit on Nancy Pelosi's Desk</h1><div className="h-full bg-green-200 hover:bg-green-400 transition duration-150 p-2 rounded-full ml-2 text-2xl"><AiOutlineCheckCircle /></div></div>
                      
                    <div className="grid grid-cols-2 mt-2">
                      <div className="flex items-center rounded-lg w-11/12 m-auto px-2 h-12 bg-red-300 hover:bg-red-400 transition duration-150">
                        <div className="w-10 h-10 rounded-full bg-cover" style={{backgroundImage: profilePicBackgroundImage}}></div>
                        <h1 className="text-2xl font-smallfont font-bold ml-2">Donald</h1>
                        <h1 className="text-2xl rounded-full ml-auto"><AiOutlineCloseCircle /></h1>
                      </div>
                      <div className="flex items-center rounded-lg w-11/12 m-auto px-2 h-12 bg-red-300 hover:bg-red-400 transition duration-150">
                        <div className="w-10 h-10 rounded-full bg-cover" style={{backgroundImage: profilePicBackgroundImage}}></div>
                        <h1 className="text-2xl font-smallfont font-bold ml-2">Alvin</h1>
                        <h1 className="text-2xl rounded-full ml-auto"><AiOutlineCloseCircle /></h1>
                      </div>
                    </div>
                    <h1 className="font-smallfont ml-auto text-2xl font-bold text-black text-center mt-2">January 6</h1>
  
                </div>
              </div>
            </div>
            
          </div>
        )
    }

}

export default LeftBar;