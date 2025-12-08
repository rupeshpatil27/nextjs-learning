"use client";

import { useState } from 'react';
import { FaUserCircle} from 'react-icons/fa';
import LogoutButton from "@/components/LogoutButton"; 

export default function UserProfileDropdown({name="",email=""}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center text-gray-600 hover:text-gray-800 focus:outline-none"
        aria-label="User profile menu"
      >
        <FaUserCircle className="w-8 h-8" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg py-2 z-10 border border-gray-200">
          
          <div className="px-4 py-3 border-b border-gray-100">
            <p className="text-sm font-semibold text-gray-800 truncate">{name}</p>
            <p className="text-sm text-gray-500 truncate">{email}</p>
          </div>
          
          <div className="p-2">
            <LogoutButton/>
          </div>
        </div>
      )}
    </div>
  );
}
