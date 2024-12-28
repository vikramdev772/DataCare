import React from "react";
import { Search, Server, Clipboard, Library } from "lucide-react"; // Use alternative icons

// Template Card Component
const TemplateCard = ({ icon: Icon, title, description, tag, copyable = false }) => (
  <div className="relative bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-purple-500 transition-all cursor-pointer group">
    <div className="flex items-start gap-4">
      <div className="flex-shrink-0">
        <Icon className="w-12 h-12 text-blue-400" />
      </div>
      <div className="flex-1">
        <h3 className="text-white text-lg font-medium mb-2">{title}</h3>
        <p className="text-gray-400 text-sm">{description}</p>
        {tag && <p className="text-gray-500 text-xs mt-2 font-mono">{tag}</p>}
      </div>
    </div>
    {copyable && (
      <button className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white opacity-0 group-hover:opacity-100 transition-opacity">
        <Clipboard className="w-4 h-4" />
      </button>
    )}
  </div>
);

const Explore = () => {
  const configEndpoints = [
    {
      icon: Server, // Use a gear or server icon as a fallback
      title: "Serverless SGLang",
      description:
        "SGLang is a fast-serving framework for large language models and vision-language models.",
    },
    {
      icon: Server,
      title: "Serverless vLLM",
      description:
        "Deploy OpenAI-compatible Large Language Model (LLM) Endpoints efficiently with the vLLM Engine on Serverless in a few clicks.",
    },
    {
      icon: Library, // Use a library icon as a fallback
      title: "Infinity Vector Embeddings",
      description:
        "Deploy a wide range of text-embedding models and frameworks using Infinity on RunPod serverless.",
    },
  ];

  const officialTemplates = [
    {
      icon: Server,
      title: "RunPod Pytorch 2.1",
      description: "Official PyTorch template",
      tag: "runpod/pytorch:2.1.0-py3.10-cuda11.8.0-devel-ubuntu22.04",
      copyable: true,
    },
    {
      icon: Server,
      title: "RunPod Pytorch 2.4.0",
      description: "Official PyTorch template",
      tag: "runpod/pytorch:2.4.0-py3.11-cuda12.4-devel-ubuntu22.04",
      copyable: true,
    },
    {
      icon: Server,
      title: "RunPod Pytorch 2.2.0",
      description: "Official PyTorch template",
      tag: "runpod/pytorch:2.2.0-py3.10-cuda12.1.1-devel-ubuntu22.04",
      copyable: true,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 p-8">
      {/* Header */}
      <h1 className="text-white text-3xl font-bold mb-8">Explore RunPod Templates</h1>

      {/* Search Bar */}
      <div className="relative mb-12">
        <input
          type="text"
          placeholder="Find something to deploy..."
          className="w-full bg-gray-800 text-white border border-gray-700 rounded-lg py-3 px-4 pl-12 focus:outline-none focus:border-purple-500"
        />
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
      </div>

      {/* Configurable Endpoints Section */}
      <div className="mb-12">
        <h2 className="text-white text-xl font-medium mb-4">Configurable Endpoints</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {configEndpoints.map((endpoint, index) => (
            <TemplateCard
              key={index}
              icon={endpoint.icon}
              title={endpoint.title}
              description={endpoint.description}
            />
          ))}
        </div>
      </div>

      {/* Official Templates Section */}
      <div>
        <h2 className="text-white text-xl font-medium mb-4">Official</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {officialTemplates.map((template, index) => (
            <TemplateCard
              key={index}
              icon={template.icon}
              title={template.title}
              description={template.description}
              tag={template.tag}
              copyable={template.copyable}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Explore;
