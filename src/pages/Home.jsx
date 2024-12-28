import React from "react";
import {
  CloudOutlined,
  WalletOutlined,
  HddOutlined,
  DollarOutlined,
} from "@ant-design/icons";

const Home = ({ darkTheme }) => {
  return (
    <div className={`container mx-auto p-4 ${darkTheme ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      <div className="">
        <h1 className={`text-lg font-bold m-4 ${darkTheme ? 'text-white' : 'text-black'}`}>Home</h1>
      </div>
      <div className="flex flex-wrap md:flex-nowrap items-center justify-start">
        <div className="flex flex-col items-center justify-center m-2 w-full md:w-1/4 cursor-pointer">
          <div className="flex items-center space-x-2">
            <span className={`text-lg font-[600] ${darkTheme ? 'text-blue-300' : 'text-blue-400'}`}>GPU Cloud</span>
            <CloudOutlined className={darkTheme ? 'text-blue-300' : 'text-blue-400'} />
          </div>
          <span className={darkTheme ? 'text-gray-300' : 'text-gray-800'}>
            Deploy a GPU cloud server.
          </span>
        </div>
        <div className="flex flex-col items-center justify-center m-2 w-full md:w-1/4 cursor-pointer">
          <div className="flex items-center space-x-2">
            <span className={`text-lg font-[600] ${darkTheme ? 'text-blue-300' : 'text-blue-400'}`}>Serverless</span>
            <WalletOutlined className={darkTheme ? 'text-blue-300' : 'text-blue-400'} />
          </div>
          <span className={darkTheme ? 'text-gray-300' : 'text-gray-800'}>
            Autoscale your workload with traffic.
          </span>
        </div>
        <div className="flex flex-col items-center justify-center m-2 w-full md:w-1/4 cursor-pointer">
          <div className="flex items-center space-x-2">
            <span className={`text-lg font-[600] ${darkTheme ? 'text-blue-300' : 'text-blue-400'}`}>Storage</span>
            <HddOutlined className={darkTheme ? 'text-blue-300' : 'text-blue-400'} />
          </div>
          <span className={darkTheme ? 'text-gray-300' : 'text-gray-800'}>
            Share network storage among all your pods.
          </span>
        </div>
        <div className="flex flex-col items-center justify-center m-2 w-full md:w-1/4 cursor-pointer">
          <div className="flex items-center space-x-2">
            <span className={`text-lg font-[600] ${darkTheme ? 'text-blue-300' : 'text-blue-400'}`}>
              Earn Credits
            </span>
            <DollarOutlined className={darkTheme ? 'text-blue-300' : 'text-blue-400'} />
          </div>
          <span className={darkTheme ? 'text-gray-300' : 'text-gray-800'}>
            Earn $500 per referral.
          </span>
        </div>
      </div>

      <hr className={`h-[1px] w-full mt-[100px] ${darkTheme ? 'bg-gray-700' : 'bg-gray-300'}`} />

      <div className="flex flex-col md:flex-row items-center justify-between mt-[50px]">
        <div className="flex flex-col items-center text-center md:text-left m-2">
          <span className={`text-xl font-[600] ${darkTheme ? 'text-white' : 'text-black'}`}>Usage</span>
          <span className={darkTheme ? 'text-gray-300' : 'text-gray-800'}>
            Keep an eye on your daily spend with real-time insights.
          </span>
        </div>
        <div className="flex flex-col items-center text-center md:text-left m-2">
          <span className={`text-xl font-[600] ${darkTheme ? 'text-white' : 'text-black'}`}>Resources</span>
          <span className={darkTheme ? 'text-gray-300' : 'text-gray-800'}>
            Monitor your GPU, vCPU, storage, and endpoint usage.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Home;