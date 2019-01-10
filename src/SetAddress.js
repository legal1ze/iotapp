import React from "react";

const SetAddress = ({ onSetAddress, onSubmitAddress }) => {
  return (
    <div className="center">
      <label className="db fw6 lh-copy f6">Address</label>
      <input
        onChange={onSetAddress}
        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-30"
        name="seed"
        id="seed"
      />
      <button
        id="send"
        className="w-10 f4 link ph3 pv2 dib white bg-light-purple"
        onClick={onSubmitAddress}
      >
        Submit!
      </button>
    </div>
  );
};

export default SetAddress;
