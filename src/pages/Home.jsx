import React from "react";
import {
  CloudOutlined,
  WalletOutlined,
  HddOutlined,
  DollarOutlined,
} from "@ant-design/icons";

const Home = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="">
        <h1 className="text-lg text-black font-bold m-4">Home</h1>
      </div>
      <div className="flex flex-wrap md:flex-nowrap items-center justify-start">
        <div className="flex flex-col items-center justify-center m-2 w-full md:w-1/4 cursor-pointer">
          <div className="flex items-center space-x-2">
            <span className="text-blue-400 text-lg font-[600]">GPU Cloud</span>
            <CloudOutlined className="text-blue-400" />
          </div>
          <span className="text-gray-800 text-center">
            Deploy a GPU cloud server.
          </span>
        </div>
        <div className="flex flex-col items-center justify-center m-2 w-full md:w-1/4 cursor-pointer">
          <div className="flex items-center space-x-2">
            <span className="text-blue-400 text-lg font-[600]">Serverless</span>
            <WalletOutlined className="text-blue-400" />
          </div>
          <span className="text-gray-800 text-center">
            Autoscale your workload with traffic.
          </span>
        </div>
        <div className="flex flex-col items-center justify-center m-2 w-full md:w-1/4 cursor-pointer">
          <div className="flex items-center space-x-2">
            <span className="text-blue-400 text-lg font-[600]">Storage</span>
            <HddOutlined className="text-blue-400" />
          </div>
          <span className="text-gray-800 text-center">
            Share network storage among all your pods.
          </span>
        </div>
        <div className="flex flex-col items-center justify-center m-2 w-full md:w-1/4 cursor-pointer">
          <div className="flex items-center space-x-2">
            <span className="text-blue-400 text-lg font-[600]">
              Earn Credits
            </span>
            <DollarOutlined className="text-blue-400" />
          </div>
          <span className="text-gray-800 text-center">
            Earn $500 per referral.
          </span>
        </div>
      </div>

      <hr className="bg-gray-800 h-[1px] w-full mt-[100px]" />

      <div className="flex flex-col md:flex-row items-center justify-between mt-[50px]">
        <div className="flex flex-col items-center text-center md:text-left m-2">
          <span className="text-black text-xl font-[600]">Usage</span>
          <span className="text-gray-800">
            Keep an eye on your daily spend with real-time insights.
          </span>
        </div>
        <div className="flex flex-col items-center text-center md:text-left m-2">
          <span className="text-black text-xl font-[600]">Resources</span>
          <span className="text-gray-800">
            Monitor your GPU, vCPU, storage, and endpoint usage.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Home;
