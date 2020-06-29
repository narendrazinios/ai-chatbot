import React, { Component } from "react";
import ChatBot from "react-simple-chatbot";
import { IStep } from "../../app/models/ChatBotModel";

interface IProp {
  steps: IStep[] | any;
}

class Chat extends Component<IProp> {
  render() {
    // if (this.state.isLoading)
    //   return <ChatBot userAvatar="/logo192.png" steps={LoadingSteps} />;
    // else
    return <ChatBot userAvatar="/logo192.png" steps={this.props.steps} />;
  }
}

export default Chat;
