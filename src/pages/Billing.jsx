import React, { useState } from "react";
import { Card, Radio, Tooltip } from "antd";
import { CreditCardOutlined } from "@ant-design/icons";
import "../styles/Billing.css";

const Billing = () => {
  const [amount, setAmount] = useState("");
  const [buttonText, setButtonText] = useState("pay with card");

  const updateInput = (value) => {
    setAmount(value);
  };

  const handleRadioChange = (e) => {
    updateInput(`${e.target.value}$`);
  };

  return (
    <>
      <h1 style={{ marginBottom: 20,marginTop:20 }}>Billing</h1>

      <Card title="Balance" style={{ marginBottom: 20 }}>
        <div className="balance-container">
          <p>Balance: $0.000</p>
          <p>Spend Limit: $30 /hr</p>
          <p>Current GPU Cloud Spend: $0.000/hr</p>
        </div>
      </Card>

      <Card title="Add Credit" style={{ marginBottom: 20 }}>
        <div className="add-credits-container">
          <div className="add-credits-input-container">
           <div className="add-credits-tooltip">
           <Radio.Group
              onChange={handleRadioChange}
              style={{
                marginBottom: 16,
                display: 'flex',
                justifyContent: 'space-around'
              }}
            >
              <Radio.Button value="25">25$</Radio.Button>
              <Radio.Button value="50">50$</Radio.Button>
              <Radio.Button value="100">100$</Radio.Button>
            </Radio.Group>
           </div>
            <input
              type="text"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Amount"
              className="add-credits-input"
            />
          </div>

          <div className="payment-icons-container">
            {/* <img
              src="https://cdn-icons-png.flaticon.com/128/5700/5700956.png"
              alt="card"
              className="payment-icon card"
              style={{ width: "50px", height: "50px" }}
              onClick={() => setButtonText("pay with card")}
            />
            <img
              src="https://cdn-icons-png.flaticon.com/128/9691/9691117.png"
              alt="crypto"
              className="payment-icon crypto"
              style={{ width: "40px", height: "40px" }}
              onClick={() => setButtonText("pay with crypto")}
            /> */}
            <button className="paybtn">pay with card</button>
          </div>
        </div>
      </Card>

      <Card title="Automatic pay" style={{ marginBottom: 20 }}>
        <div className="automatic-pay-container">
          <p>
            Configure automatic billing by adding a card to your account. When
            your balance nears your Auto-Pay threshold, we will attempt to
            reload RunPod credits by billing your saved card max once per hour
            for the Auto-Pay amount that is configured below.
          </p>
          <div className="add-credits-button-container">
            <img
              src="https://cdn-icons-png.flaticon.com/128/5700/5700956.png"
              alt=""
            />
            <Tooltip
              title="You must have at least $100 in credits to enable automatic payments"
              placement="bottom"
            >
              <div className="add-credits-button">
                <CreditCardOutlined /> Add credits
              </div>
            </Tooltip>
          </div>
        </div>
      </Card>

      <Card
        title="Recent Transactions"
        style={{ marginBottom: 20, backgroundColor: "", color: "" }}
        headStyle={{ color: "" }}
      >
        <div className="recent-transactions-container">
          <div className="transaction-row">
            <div className="transaction-item">TIME</div>
            <div className="transaction-item">TYPE</div>
            <div className="transaction-item">PLATFORM</div>
            <div className="transaction-item">AMOUNT</div>
            <div className="transaction-item">INVOICE</div>
          </div>
        </div>
      </Card>
    </>
  );
};

export default Billing;
