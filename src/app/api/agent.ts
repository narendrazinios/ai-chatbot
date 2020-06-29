import axios, { AxiosResponse } from "axios";
import { ILoginResponse, IChatResponse } from "../models/ChatModels";

axios.defaults.baseURL = "https://zechatapp.azurewebsites.net/api";

const responseBody = (response: AxiosResponse) => response.data;

// const sleep = (ms: number) => (response: AxiosResponse) =>
//   new Promise<AxiosResponse>((resolve) =>
//     setTimeout(() => resolve(response), ms)
//   );

const requests = {
  get: (url: string) => axios.get(url).then(responseBody),
  post: (url: string, body: {}) => axios.post(url, body).then(responseBody),
  put: (url: string, body: {}) => axios.put(url, body).then(responseBody),
  del: (url: string) => axios.delete(url).then(responseBody),
};

const Chat = {
  login: (agentId: string): Promise<any> =>
    requests.get(`/Chat/Login?agentId=${agentId}`),
  chat: (chatbody: IChatResponse): Promise<IChatResponse> =>
    requests.post("/Chat", chatbody),
};

export default {
  Chat,
};
