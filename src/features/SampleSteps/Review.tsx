import React, { useState, useEffect } from "react";

const Review = (props: any) => {
  const [state, setState] = useState({
    name: { value: "" },
    gender: { value: "" },
    age: { value: "" },
  });

  useEffect(() => {
    debugger;
    const { steps } = props;
    const { name, gender, age } = steps;
    setState({ name, gender, age });
  }, [props]);

  const { name, gender, age } = state;
  return (
    <div style={{ width: "100%" }}>
      <h3>Summary</h3>
      <table>
        <tbody>
          <tr>
            <td>Name</td>
            <td>{name.value}</td>
          </tr>
          <tr>
            <td>Gender</td>
            <td>{gender.value}</td>
          </tr>
          <tr>
            <td>Age</td>
            <td>{age.value}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Review;
