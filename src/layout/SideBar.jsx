import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Home,
  Search,
  Box,
  Cloud,
  Database,
  FileText,
  Key,
  Settings,
  CreditCard,
  Gift,
  Users,
  ClipboardList,
  Terminal,
  HelpCircle,
  Info,
} from 'lucide-react';

// SidebarItem Component
const SidebarItem = ({ icon: Icon, text, active = false, onClick }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`flex items-center px-4 py-2 my-1 cursor-pointer rounded-lg transition-colors duration-200 ${
        active ? 'bg-gray-800 text-white' : 'text-gray-400 hover:bg-gray-800 hover:text-white'
      }`}
    >
      <Icon className="w-5 h-5 mr-4" />
      <span className="text-sm font-medium">{text}</span>
    </motion.div>
  );
};

// Main Sidebar Component
const SideBar = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [activeItem, setActiveItem] = useState('Home');

  const menuItems = [
    { icon: Home, text: 'Home' },
    { icon: Search, text: 'Explore' },
    { divider: true, label: 'MANAGE' },
    { icon: Box, text: 'Pods' },
    { icon: Cloud, text: 'Serverless' },
    { icon: Database, text: 'Storage' },
    { icon: FileText, text: 'Templates' },
    { icon: Key, text: 'Secrets' },
    { divider: true, label: 'ACCOUNT' },
    { icon: Settings, text: 'Settings' },
    { icon: CreditCard, text: 'Billing' },
    { icon: Gift, text: 'Savings Plans' },
    { icon: Users, text: 'Team' },
    { icon: ClipboardList, text: 'Audit Logs' },
    { icon: Terminal, text: 'Remote Access' },
    { divider: true, label: 'HELP' },
    { icon: HelpCircle, text: 'Contact' },
    { icon: Info, text: 'FAQ' },
  ];

  return (
    <motion.div
      initial={{ width: isExpanded ? 240 : 72 }}
      animate={{ width: isExpanded ? 240 : 72 }}
      transition={{ duration: 0.3 }}
      className="h-screen bg-gray-900 text-white overflow-hidden"
    >
      {/* Logo */}
      <div className="flex items-center p-4">
        <motion.div
          whileHover={{ rotate: 180 }}
          transition={{ duration: 0.3 }}
          className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center"
        >
          <div className="w-4 h-4 bg-white rounded-sm" />
        </motion.div>
        {isExpanded && (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="ml-4 font-semibold"
          >
            Dashboard
          </motion.span>
        )}
      </div>

      {/* Menu Items */}
      <div className="px-2">
        {menuItems.map((item, index) =>
          item.divider ? (
            <div key={`divider-${index}`} className="px-4 pt-6 pb-2">
              <span className="text-xs font-semibold text-gray-500">{item.label}</span>
            </div>
          ) : (
            <SidebarItem
              key={`menu-${item.text}`}
              icon={item.icon}
              text={item.text}
              active={activeItem === item.text}
              onClick={() => setActiveItem(item.text)}
            />
          )
        )}
      </div>

      {/* Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsExpanded(!isExpanded)}
        className="absolute bottom-4 right-4 w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center"
      >
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <svg
            className="w-4 h-4 text-white"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M9 5l7 7-7 7" />
          </svg>
        </motion.div>
      </motion.button>
    </motion.div>
  );
};

export default SideBar;
