import React, { useState } from 'react';
import { Search, Mic, Camera, Grid, Beaker } from 'lucide-react';

const GoogleClone = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#202124] text-[#e8eaed]">
      <header className="p-4">
        <nav className="flex justify-end items-center space-x-4">
          <a href="https://mail.google.com" className="text-sm hover:underline">Gmail</a>
          <a href="https://www.google.com/imghp" className="text-sm hover:underline">Images</a>
          <button className="p-2 rounded-full hover:bg-[#303134]">
            <Beaker size={20} />
          </button>
          <button className="p-2 rounded-full hover:bg-[#303134]">
            <Grid size={20} />
          </button>
          <button className="w-8 h-8 rounded-full bg-[#8ab4f8] text-[#202124] flex items-center justify-center font-medium">
            A
          </button>
        </nav>
      </header>

      <main className="flex-grow flex flex-col items-center justify-center px-4">
        <h1 className="text-[90px] font-light mb-8">Google</h1>
        <form onSubmit={handleSearch} className="w-full max-w-[584px]">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full p-3 pl-12 pr-20 rounded-full bg-[#303134] text-white border border-[#5f6368] focus:outline-none focus:border-[#8ab4f8] hover:bg-[#303134] hover:shadow-md"
              placeholder="Search Google or type a URL"
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#9aa0a6]" size={20} />
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex items-center space-x-4">
              <Mic className="w-6 h-6 cursor-pointer text-[#4285F4]" />
              <Camera className="w-6 h-6 cursor-pointer text-[#FBBC05]" />
            </div>
          </div>
        </form>
        <div className="mt-8 space-x-2">
          <button className="px-4 py-2 bg-[#303134] hover:bg-[#3c4043] rounded text-sm">
            Google Search
          </button>
          <button className="px-4 py-2 bg-[#303134] hover:bg-[#3c4043] rounded text-sm">
            I'm Feeling Lucky
          </button>
        </div>
        <p className="mt-6 text-sm text-[#999da2]">
          Google offered in:
          <a href="https://www.google.com/search?hl=fr" className="text-[#8ab4f8] hover:underline ml-1">Français</a>
          <a href="https://www.google.com/search?hl=sw" className="text-[#8ab4f8] hover:underline ml-1">Kiswahili</a>
          <a href="https://www.google.com/search?hl=rw" className="text-[#8ab4f8] hover:underline ml-1">Ikinyarwanda</a>
        </p>
      </main>

      <footer className="bg-[#171717] text-[#999da2] text-sm">
        <div className="px-4 py-3 border-b border-[#3c4043]">
          Rwanda
        </div>
        <div className="px-4 py-3 flex flex-col sm:flex-row justify-between">
          <div className="space-x-4 mb-2 sm:mb-0">
            <a href="https://about.google" className="hover:underline">About</a>
            <a href="https://www.google.com/intl/en/ads" className="hover:underline">Advertising</a>
            <a href="https://www.google.com/services" className="hover:underline">Business</a>
            <a href="https://www.google.com/search/howsearchworks" className="hover:underline">How Search works</a>
          </div>
          <div className="space-x-4">
            <a href="https://policies.google.com/privacy" className="hover:underline">Privacy</a>
            <a href="https://policies.google.com/terms" className="hover:underline">Terms</a>
            <a href="https://www.google.com/preferences" className="hover:underline">Settings</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default GoogleClone;
