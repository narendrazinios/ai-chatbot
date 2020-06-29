import React, { Component } from "react";
import ChatBot from "react-simple-chatbot";
import models from "../../app/models/SampleModels";
import { IStep } from "../../app/models/ChatBotModel";
import { func } from "prop-types";
import agent from "../../app/api/agent";
import { ChatData } from "../../app/stores/Data";
import Axios from "axios";

class Chat extends Component {
  state = { isLoading: true, steps: {} };
  componentWillMount() {
    // Axios.get(
    //   "https://zechatapp.azurewebsites.net/api/Chat/Login?agentId=3b2c4393-040a-4677-82fc-a91e8a0a8fdf"
    // ).then((resp) => alert(resp));
    // agent.Chat.login(ChatData.LoginTokenId).then((resp) => alert(resp));
    Steps().then((resp) => {
      this.setState({ isLoading: false, steps: resp });
      debugger;
    });
  }

  render() {
    if (this.state.isLoading)
      return <ChatBot userAvatar="/logo192.png" steps={LoadingSteps} />;
    else return <ChatBot userAvatar="/logo192.png" steps={this.state.steps} />;
  }
}

const Steps = async () => {
  var loginResponse = JSON.parse(ChatData.TempLoginData); //await agent.Chat.login(ChatData.LoginTokenId);
  var stepCount: number = 1;
  var steps: IStep[] = [
    { id: stepCount++, message: loginResponse.text, trigger: 1 },
    { id: stepCount++, message: "", end: true },
  ];

  return steps;
};

const LoadingSteps: IStep[] = [{ id: 1, message: "Loading...", end: true }];

export default Chat;
