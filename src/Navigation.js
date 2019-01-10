import React from "react";

const Navigation = ({
  onSetAddress,
  onRouteChange,
  onGenerateAdress,
  onLastTransactions
}) => {
  return (
    <nav style={{ display: "flex", justifyContent: "flex-end" }}>
      <p
        onClick={onSetAddress}
        className="f3 link dim black underline pa3 pointer"
      >
        Set Reciver Adress
      </p>
      <p
        onClick={onLastTransactions}
        className="f3 link dim black underline pa3 pointer"
      >
        Show Transactions
      </p>
      <p
        onClick={onGenerateAdress}
        className="f3 link dim black underline pa3 pointer"
      >
        Generate Address
      </p>
      <p
        onClick={() => onRouteChange("signin")}
        className="f3 link dim black underline pa3 pointer"
      >
        Sign Out
      </p>
    </nav>
  );
};

export default Navigation;
