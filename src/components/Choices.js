import React from "react";
import { Radio } from "antd";

const RadioGroup = Radio.Group;

const radioStyle = {
  display: "block",
  height: "30px",
  lineHeight: "30px"
};

const Choices = (props) => {

  // const { questionId } = props;
  // const { usersAnswers } = props;
  
  return (
    <RadioGroup
      onChange={(e, qId) => props.change(e, props.questionId)}
      value={
        props.usersAnswers[props.questionId] !== undefined &&
        props.usersAnswers[props.questionId] !== null
          ? props.usersAnswers[props.questionId]
          : null
      }
    >
      {props.choices.map((c, index) => {
        return (
          <Radio style={radioStyle} value={c} key={index}>
            {c}
          </Radio>
        );
      })}
    </RadioGroup>
  );
}

export default Choices;
