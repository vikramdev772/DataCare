import React from "react";
import { useState } from "react";
import { Button, Modal, Card, Row, Col } from "antd";
import "../styles/Storage.css";

const Storage = () => {
  const [open, setOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (title) => {
    setSelectedCard(title);
  };

  return (
    <>
      <h1 style={{ marginBottom: 20, marginTop: 20 }}>Storage</h1>
      <Button type="primary" onClick={() => setOpen(true)} className="p-5 flex text-center items-center justify-center text-[16px]">
        + New Network Volume
      </Button>
      <Modal
        title="Create Network Volume"
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={1180}
        style={{ height: "80vh" }} // Set the height to 80% of the viewport height
      
      >
        <div>
          <h2 style={{ marginBottom: 16 }}>Select Data Center</h2>{" "}
          {/* Adjusted margin for gap */}
          <Row gutter={[16, 24]}>
            {[
              "CA-MTL-1",
              "EU-CZ-1",
              "EU-RO-1",
              "EUR-NO-1",
              "US-KS-1",
              "US-KS-2",
              "US-OR-1",
            ].map((title, index) => (
              <Col span={4} key={index}>
                <Card
                  title={title}
                  bordered={true}
                  onClick={() => handleCardClick(title)}
                  style={{
                    cursor: "pointer",
                    borderColor: selectedCard === title ? "green" : "#f0f0f0",
                    height: "120px", // Decrease the height of the cards
                  }}
                >

                  <div
                    style={{
                      height: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-start",
                    }}
                  >
                    
                    {title === "CA-MTL-1" && "CANADA"}
                    {title === "EU-CZ-1" && "EUROPE"}
                    {title === "EU-RO-1" && "EUROPE"}
                    {title === "EUR-NO-1" && "EUROPE"}
                    {title === "US-KS-1" && "USA"}
                    {title === "US-KS-2" && "USA"}
                    {title === "US-OR-1" && "USA"}
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
          <br />
          <div className="flex item-center flex-row justify-between">
            <h2>Data Center GPU Availability</h2>
            {/* <p>None<br />Low<br />Medium<br />High</p> */}
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div
                style={{
                  backgroundColor: "gray",
                  flex: "1",
                  padding: "5px",
                  marginRight: "5px",
                  borderRadius: "8px",
                }}
              >
                None
              </div>
              <div
                style={{
                  backgroundColor: "red",
                  flex: "1",
                  padding: "5px",
                  marginRight: "5px",
                  borderRadius: "8px",
                }}
              >
                Low
              </div>
              <div
                style={{
                  backgroundColor: "orange",
                  flex: "1",
                  padding: "5px",
                  marginRight: "5px",
                  borderRadius: "8px",
                }}
              >
                Medium
              </div>
              <div
                style={{
                  backgroundColor: "lightgreen",
                  flex: "1",
                  padding: "5px",
                  borderRadius: "8px",
                }}
              >
                High
              </div>
            </div>
          </div>
          <br />
          <div className="flex flex-wrap gap-4">
            <div className="bg-gray-200 rounded-lg p-4">
              <p>A40</p>
            </div>
            <div className="bg-gray-200 rounded-lg p-4">
              <p>RTX A5000</p>
            </div>
            <div className="bg-gray-200 rounded-lg p-4">
              <p>RTX A4000</p>
            </div>
            <div className="bg-gray-200 rounded-lg p-4">
              <p>H100 SXM</p>
            </div>
            <div className="bg-gray-200 rounded-lg p-4">
              <p>A100 PCIe</p>
            </div>
            <div className="bg-gray-200 rounded-lg p-4">
              <p>H100 PCIe</p>
            </div>
            <div className="bg-gray-200 rounded-lg p-4">
              <p>L40</p>
            </div>
            <div className="bg-gray-200 rounded-lg p-4">
              <p>RTX A6000</p>
            </div>
            <div className="bg-gray-200 rounded-lg p-4">
              <p>RTX 3090</p>
            </div>
            <div className="bg-gray-200 rounded-lg p-4">
              <p>RTX 4090</p>
            </div>
            <div className="bg-gray-200 rounded-lg p-4">
              <p>L40S</p>
            </div>
            <div className="bg-gray-200 rounded-lg p-4">
              <p>RTX A4500</p>
            </div>
            <div className="bg-gray-200 rounded-lg p-4">
              <p>RTX 4000 Ada</p>
            </div>
            <div className="bg-gray-200 rounded-lg p-4">
              <p>L4</p>
            </div>
            <div className="bg-gray-200 rounded-lg p-4">
              <p>A100 SXM</p>
            </div>
            <div className="bg-gray-200 rounded-lg p-4">
              <p>MI300X</p>
            </div>
            <div className="bg-gray-200 rounded-lg p-4">
              <p>RTX 6000 Ada</p>
            </div>
          </div>
          <br />
          <div className="flex flex-row item-center justify-center gap-2">
          <div className="inputGroup">
            <input type="text" required autoComplete="off" />
            <label htmlFor="name">  Volume Name</label>
          </div>
          <div className="inputGroup">
            <input type="text" required autoComplete="off" />
            <label htmlFor="name"> 10 GB (minimum 10GB)</label>
          </div>
         </div>
         <br />
          <div>
            Network Volumes are charged at $0.07/GB/Month, and $0.05/GB/Month
            for 1TB or more, with a maximum of 4TB. Please contact support for
            larger volumes.
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Storage;
