export interface ReviewModel {
  name: string;
  gender: string;
  age: string;
}

//https://lucasbassetti.com.br/react-simple-chatbot/#/docs/steps
export interface IStep {
  id: string | number;

  user?: boolean | false;
  message?: string;
  // trigger next step by id name
  trigger?: string | number | Function;
  validator?: any; //Function
  end?: boolean;
  placeholder?: string;
  metadata?: any;

  component?: JSX.Element; //React.Component
  options?: any;
  asMessage?: boolean;
  // name of the id similar to trigger just trigger call next step while it recall last step to update value
  update?: string;
}

// export interface ISteps {
//   steps: IStep[];
// }

// export interface StringArray {
//   [index: number]: string;
// }
