import React from 'react';
import { Button } from 'antd';

const Pods = ({ onDeployClick }) => {
  return (
    <>
      <h1 className="mb-5 mt-5">Pods</h1>
      <Button type='primary' onClick={onDeployClick}>+ Deploy</Button>
      <div className="flex flex-col items-center justify-center h-screen gap-[50px]">
        <img
          src="https://www.runpod.io/console/_next/static/media/SecureGraphic.8cac564c.svg"
          alt="Pods"
          className="w-96 h-96 opacity-50"
        />
        <h2 className="text-lg font-bold">You do not have any Pods yet.</h2>
        <Button type='primary' onClick={onDeployClick}>Deploy a Pod</Button>
      </div>
    </>
  );
};

export default Pods;
