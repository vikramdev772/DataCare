import React, { useState } from "react";
import { Radio, Button, Dropdown, Modal, Row, Col, Slider } from "antd";
import { GlobalOutlined, DatabaseOutlined } from "@ant-design/icons";
import Storage from "./Storage";
import PodCard from "./PodCard";

const items = [
  {
    key: "1",
    label: (
      <a target="_blank" rel="noopener noreferrer">
        Any
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a target="_blank" rel="noopener noreferrer">
        CA-MTL-1
      </a>
    ),
  },
  {
    key: "3",
    label: (
      <a target="_blank" rel="noopener noreferrer">
        CA-MTL-2
      </a>
    ),
  },
  {
    key: "4",
    label: (
      <a target="_blank" rel="noopener noreferrer">
        CA-MTL-3
      </a>
    ),
  },
  {
    key: "5",
    label: (
      <a target="_blank" rel="noopener noreferrer">
        US-GA-1
      </a>
    ),
  },
];

const Deploypod = () => {
  const [position, setPosition] = useState("GPU");
  const [open, setOpen] = useState(false);

  const buttonStyle = {
    backgroundColor: "white",
    color: "black",
    borderColor: "#1890ff",
  };
  const activeButtonStyle = {
    backgroundColor: "#1890ff",
    color: "white",
    borderColor: "#40a9ff",
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const networkVolumeItems = [
    {
      key: "1",
      label: <Button onClick={() => setOpen(true)}>+ Volume 1</Button>,
    },
  ];

  const marks = {
    0: "Any",
    16: "16",
    24: "24",
    32: "32",
    48: "48",
    60: "60",
    70: "70",
    80: "80",
    90: "90",
    100: {
      style: {
        color: "green",
      },
      label: <strong>100</strong>,
    },
  };

  return (
    <>
      <div>
        <h1>Deploy {position} Pod</h1>
        <div className="mt-4 p-4 bg-white rounded-lg shadow-md">
          <div className="flex flex-row items-center space-x-4">
            <Radio.Group
              value={position}
              onChange={(e) => setPosition(e.target.value)}
            >
              <Radio.Button
                value="GPU"
                style={position === "GPU" ? activeButtonStyle : buttonStyle}
              >
                GPU
              </Radio.Button>
              <Radio.Button
                value="CPU"
                style={position === "CPU" ? activeButtonStyle : buttonStyle}
              >
                CPU
              </Radio.Button>
            </Radio.Group>
            <Dropdown menu={{ items }} placement="bottomLeft">
              <Button className="flex items-center border-none hover:bg-blue-300">
                <GlobalOutlined /> Any
              </Button>
            </Dropdown>
            <Dropdown
              menu={{ items: networkVolumeItems }}
              placement="bottomLeft"
            >
              <Button className="flex items-center border-none hover:bg-blue-300">
                <DatabaseOutlined /> Network Volume
              </Button>
            </Dropdown>
          </div>
          <br />
          <div className="p-4 bg-white rounded-lg shadow-md">
            <h1>Filter GPUs by VRAM</h1>
            <br />
            <Slider marks={marks} defaultValue={48} step={16} />
          </div>
          <br />
          <div className="flex flex-row gap-2 items-center justify-flex-start ">
            <div className="flex items-center justify-center bg-gray-200 p-[8px] rounded-md">
              <span>NVIDIA</span>
            </div>
            <div className="flex flex-row items-center justify-center w-[100px]">
              <span>Latest Gen</span>
            </div>
            <hr className="bg-gray-300 h-[1px] w-full ml-5" />
          </div>
          <br />
          <br />
          <div className="flex flex-row items-center justify-between w-full">
            <PodCard
              title="A40"
              price="$0.69/hr"
              vram="24GB VRAM"
              max="8max"
              vcpu="48 GB RAM * 9 vCPU"
              high="High"
            />

            <PodCard
              title="RTX A6000"
              price="$0.79/hr"
              vram="48GB VRAM"
              max="8max"
              vcpu="58 GB RAM * 8 vCPU"
              high="High"
            />

            <PodCard
              title="RTX A5000"
              price="$0.45/hr"
              vram="48GB VRAM"
              max="8max"
              vcpu="29 GB RAM * 12 vCPU"
              high="High"
            />

            <PodCard
              title="A100 Pcle"
              price="$1.89/hr"
              vram="80GB VRAM"
              max="8max"
              vcpu="117 GB RAM * 7 vCPU"
              high="Medium"
            />
          </div>
        </div>

        <Modal
          title="Create Network Volume"
          centered
          visible={open}
          onOk={() => setOpen(false)}
          onCancel={() => setOpen(false)}
          width={1180}
          style={{ height: "80vh" }}
        >
          <Storage setOpen={setOpen} />
        </Modal>
      </div>
    </>
  );
};

export default Deploypod;
