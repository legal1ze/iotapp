import React from "react";
import "./App.css";
import "./MessageBox.css";

const MessageBox = ({ onButtonSend }) => {
  return (
    <div className="center pa1 ">
      <div className="bottom pa2 br3 shadow-5">
        <input
          className="center b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
          type="text"
          id="message"
        />
        <button
          id="send"
          className="w-30 f4 link ph3 pv2 dib white bg-light-purple"
          onClick={onButtonSend}
        >
          Send!
        </button>
      </div>
    </div>
  );
};

export default MessageBox;
