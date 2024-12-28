import React from 'react';
import { Monitor, Cloud, Database, CreditCard } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts';

const FeatureCard = ({ icon: Icon, title, description, className = "" }) => (
  <div className={`p-6 rounded-lg bg-gray-800/50 hover:bg-gray-800/70 transition-all cursor-pointer ${className}`}>
    <div className="flex items-center gap-2 mb-2">
      <Icon className="w-5 h-5 text-purple-500" />
      <h3 className="text-white text-lg font-medium">{title}</h3>
    </div>
    <p className="text-gray-400 text-sm">{description}</p>
  </div>
);

const Home = () => {
  // Sample data for the usage chart
  const usageData = [
    { name: 'Dec 28', value: 0.00 },
    { name: 'Dec 29', value: 0.20 },
    { name: 'Dec 30', value: 0.40 },
    { name: 'Dec 31', value: 0.60 },
    { name: 'Jan 1', value: 0.80 },
    { name: 'Jan 2', value: 1.00 },
  ];

  const resourceMetrics = [
    { label: 'GPUS', value: '0' },
    { label: 'VCPUS', value: '0' },
    { label: 'STORAGE', value: '0 GB' },
    { label: 'ENDPOINTS', value: '0' },
  ];

  return (
    <div className="p-8 bg-gray-900 min-h-screen">
      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <FeatureCard
          icon={Monitor}
          title="GPU Cloud"
          description="Deploy a GPU pod."
        />
        <FeatureCard
          icon={Cloud}
          title="Serverless"
          description="Autoscale your workload with traffic with < 250ms cold-start."
        />
        <FeatureCard
          icon={Database}
          title="Storage"
          description="Share network storage among all your pods."
        />
        <FeatureCard
          icon={CreditCard}
          title="Earn Credits"
          description="Refer your friends & earn up to 6% for every penny they spend."
        />
      </div>

      {/* Usage Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Usage Chart */}
        <div className="lg:col-span-2 bg-gray-800/50 rounded-lg p-6">
          <h2 className="text-white text-xl font-medium mb-4">Usage</h2>
          <p className="text-gray-400 text-sm mb-6">
            Keep an eye on your daily spend with real-time insights.
          </p>
          
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <p className="text-gray-400 text-sm">Rolling Average</p>
              <p className="text-white text-2xl font-medium">$0.00/day</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm">Current Spend Rate</p>
              <p className="text-white text-2xl font-medium">$0.00/hr</p>
            </div>
          </div>

          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={usageData}>
                <XAxis 
                  dataKey="name" 
                  stroke="#6B7280"
                  tick={{ fill: '#6B7280' }}
                />
                <YAxis 
                  stroke="#6B7280"
                  tick={{ fill: '#6B7280' }}
                  ticks={[0.00, 0.20, 0.40, 0.60, 0.80, 1.00]}
                />
                <Line 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#8B5CF6" 
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Resources */}
        <div className="bg-gray-800/50 rounded-lg p-6">
          <h2 className="text-white text-xl font-medium mb-4">Resources</h2>
          <p className="text-gray-400 text-sm mb-6">
            Monitor your GPU, vCPU, storage, and endpoint usage.
          </p>

          <div className="grid grid-cols-2 gap-6">
            {resourceMetrics.map((metric, index) => (
              <div key={index}>
                <p className="text-gray-400 text-sm mb-2">{metric.label}</p>
                <p className="text-white text-2xl font-medium">{metric.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;