import { Component } from "react";

interface ButtonProps {
    text: string;
    action: () => void;
}

class CtoButton extends Component<ButtonProps> {
    //CTOButton stands for Call to Action Button

    constructor(props: ButtonProps) {
        super(props);
    }


    render() {
        const {text, action} = this.props;

        return(
            <div className="bg-black hover:pr-1 hover:pb-1 rounded-full cursor-pointer transition duration-150">
                <div className="rounded-full uppercase bg-[#54d4a6] p-4 font-smallfont font-bold text-center"
                onClick = {action}>{text}</div>
            </div>
        )
    }


}

export default CtoButton;