import React from 'react';
import './App.css';
import Logo from './assests/images/logo-simplia-reps.svg';
import backRed from './assests/images/red-back.jpg';
import { MenuOutlined } from '@ant-design/icons';
import { TfiMenuAlt } from "react-icons/tfi";
import { BsCashCoin } from "react-icons/bs";
import { SiWebmoney } from "react-icons/si";
import { BsGlobeAmericas } from "react-icons/bs";
import { MdOutlineQuestionAnswer } from "react-icons/md";
import { MdVideoLibrary } from "react-icons/md";
import { SiMarketo } from "react-icons/si";
import { FcFaq } from "react-icons/fc";
import { MdPaid } from "react-icons/md";
import { GiArtificialHive } from "react-icons/gi";


function App() {
  return (
    <div className="App">

      <header className="flex items-center justify-start p-4 m-4">
        <img src={Logo} alt="Logo" className="h-12 mr-4" />

        {/* Navigation Menu on the right */}
        <nav className='ml-auto'>
          <ul className="flex space-x-15">
            <li>
              <a href="#home" className="font-semibold text-xl text-customGrey hover:text-hoverGrey hover:bg-gray-100 rounded-lg p-2 transition-all block w-32 text-center">
                Home
              </a>
            </li>
            <li>
              <a href="#faq" className="font-semibold text-xl text-customGrey hover:text-hoverGrey hover:bg-gray-100 rounded-lg p-2 transition-all block w-32 text-center">
                Faq
              </a>
            </li>
            <li>
              <a href="#blogs" className="font-semibold text-xl text-customGrey hover:text-hoverGrey hover:bg-gray-100 rounded-lg p-2 transition-all block w-32 text-center mr-20">
                Blogs
              </a>
            </li>


            <li><a href="#blogs" className=""><MenuOutlined className="text-customRed mt-4" />
            </a></li>
          </ul>
        </nav>

      </header>

      <div className="relative">
        {/* Image */}
        <img src={backRed} alt='' className='rounded-lg h-130 w-full blur-xs' />

        {/* Container for Text and Buttons */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center top-0">
          {/* First Text Overlay */}
          <div>
            <p className="text-customGreyOne text-5xl font-bold">
              "Hangout by a <span className="text-customRedOne">River of Money</span> to Get Some" <span className="text-xs">- Yoda</span>
            </p>
          </div>

          {/* Second Text Overlay */}
          <div className='mt-4'>
            <p className="text-customGreyTwo text-4xl font-bold">
              Trillion Dollars a Month<br />
              Flowing into<br />
              Websites & Marketing!<br />
              Get Some of It Now!
            </p>
          </div>

          {/* Buttons */}
          <div className="mt-6 space-x-20">
            <button className="w-44 rounded-full px-6 py-3 bg-customBlue text-customGreyOne font-bold hover:bg-customBlueHover">
              Join Us
            </button>
            <button className="w-44 rounded-full px-6 py-3 bg-customBlue text-customGreyOne font-bold hover:bg-customBlueHover">
              Play Video
            </button>
          </div>

          <div className="mt-6 space-x-4">
            <button className="w-32 rounded-full px-6 py-3 bg-red-500 text-customGreyOne font-bold hover:bg-red-700">
              Buy Leads
            </button>

            <button className="w-32 rounded-full px-6 py-3 bg-red-500 text-customGreyOne font-bold hover:bg-red-700">
              Get Dialer
            </button>

            <button className="w-32 rounded-full px-6 py-3 bg-red-500 text-customGreyOne font-bold hover:bg-red-700">
              Get Site
            </button>
          </div>


        </div>
      </div>


      <div className='p-4 w-full bg-customYellow text-center rounded-lg'>
        <div className='text-4xl font-semibold text-red-500'>
          Helpful Links
        </div>
        <div className='text-6xl font-semibold text-customGrey'>
          Resources for you
        </div>
        <div className="flex justify-center space-x-4 mt-4">
          {/* First Card */}
          <div className="bg-white rounded-lg shadow-md p-4 flex items-center group transition duration-300 ease-in-out hover:border-customBorderPurple" style={{ width: '600px' }}>
            <div className="mr-4">
              <BsCashCoin style={{ fontSize: '48px' }} />
            </div>
            <div>
              <p className="font-bold text-xl text-red-500">SEND PAYMENT LINK</p>
              <p className='text-customGrey font-semibold'>Send customers this link for them to complete their first months payment</p>
            </div>
          </div>

          {/* Second Card */}
          <div className="bg-white rounded-lg shadow-md p-4 flex items-center group transition duration-300 ease-in-out hover:border-customBorderPurple" style={{ width: '600px' }}>
            <div className="mr-4">
              <TfiMenuAlt style={{ fontSize: '48px' }} />
            </div>
            <div>
              <p className="font-bold text-xl text-red-500">SIMPLIA DECK</p>
              <p className='text-customGrey font-semibold'>
                A detailed presentation on Simplia’s services and guarantees that everything is right
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center space-x-4 mt-4">
          {/* First Card */}
          <div className="bg-white rounded-lg shadow-md p-4 flex items-center group transition duration-300 ease-in-out hover:border-customBorderPurple" style={{ width: '600px' }}>
            <div className="mr-4">
              <SiWebmoney style={{ fontSize: '48px' }} />
            </div>
            <div>
              <p className="font-bold text-xl text-red-500">WEBSITE EXAMPLE</p>
              <p className='text-customGrey font-semibold'>
                Show customers websites Simplia has created related to their
                industry
              </p>
            </div>
          </div>

          {/* Second Card */}
          <div className="bg-white rounded-lg shadow-md p-4 flex items-center group transition duration-300 ease-in-out hover:border-customBorderPurple" style={{ width: '600px' }}>
            <div className="mr-4">
              <BsGlobeAmericas style={{ fontSize: '48px' }} />
            </div>
            <div>
              <p className="font-bold text-xl text-red-500">SIMPLIA WEBSITE</p>
              <p className='text-customGrey font-semibold'>

                The main Simplia.com website that includes testimonials and everything that validates all our claims

              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center space-x-4 mt-4">
          {/* First Card */}
          <div className="bg-white rounded-lg shadow-md p-4 flex items-center group transition duration-300 ease-in-out hover:border-customBorderPurple" style={{ width: '600px' }}>
            <div className="mr-4">
              <MdOutlineQuestionAnswer style={{ fontSize: '48px' }} />
            </div>
            <div>
              <p className="font-bold text-xl text-red-500">Q&A LINK</p>
              <p className='text-customGrey font-semibold'>
                Monday – Friday: Every day at 11 am, join the live Q&amp;A
                with Simplia’s CEO to learn how to sell and ask questions
              </p>
            </div>
          </div>

          {/* Second Card */}
          <div className="bg-white rounded-lg shadow-md p-4 flex items-center group transition duration-300 ease-in-out hover:border-customBorderPurple" style={{ width: '600px' }}>
            <div className="mr-4">
              <MdVideoLibrary style={{ fontSize: '48px' }} />
            </div>
            <div>
              <p className="font-bold text-xl text-red-500">SIMPLIA VIDEO</p>
              <p className='text-customGrey font-semibold'>

                Use this short video to show customers the value of our
                services and commitments

              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center space-x-4 mt-4">
          {/* First Card */}
          <div className="bg-white rounded-lg shadow-md p-4 flex items-center group transition duration-300 ease-in-out hover:border-customBorderPurple" style={{ width: '600px' }}>
            <div className="mr-4">
              <SiMarketo style={{ fontSize: '48px' }} />
            </div>
            <div>
              <p className="font-bold text-xl text-red-500">TRACK SALES</p>
              <p className='text-customGrey font-semibold'>
                Use this Sales tracker to record each of your sales helping gain helpful insight for every element
              </p>
            </div>
          </div>

          {/* Second Card */}
          <div className="bg-white rounded-lg shadow-md p-4 flex items-center group transition duration-300 ease-in-out hover:border-customBorderPurple" style={{ width: '600px' }}>
            <div className="mr-4">
              <FcFaq style={{ fontSize: '48px' }} />
            </div>
            <div>
              <p className="font-bold text-xl text-red-500">FAQ</p>
              <p className='text-customGrey font-semibold'>
                Stil have questions check our faq's that will guide you with all your simple querries
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center space-x-4 mt-4">
          {/* First Card */}
          <div className="bg-white rounded-lg shadow-md p-4 flex items-center group transition duration-300 ease-in-out hover:border-customBorderPurple" style={{ width: '600px' }}>
            <div className="mr-4">
              <MdPaid style={{ fontSize: '48px' }} />
            </div>
            <div>
              <p className="font-bold text-xl text-red-500">GET PAID</p>
              <p className='text-customGrey font-semibold'>
                Get set up with direct deposit and get paid weekly every
                Friday for the previous week
              </p>
            </div>
          </div>

          {/* Second Card */}
          <div className="bg-white rounded-lg shadow-md p-4 flex items-center group transition duration-300 ease-in-out hover:border-customBorderPurple" style={{ width: '600px' }}>
            <div className="mr-4">
              <GiArtificialHive style={{ fontSize: '48px' }} />
            </div>
            <div>
              <p className="font-bold text-xl text-red-500">SMART AI</p>
              <p className='text-customGrey font-semibold'>

                The all-in-one search engine tool made with Smart Technology that give one stop solution for everything
              </p>
            </div>
          </div>

        </div>

        {/* Third Card */}
        <div className="bg-white rounded-lg shadow-md mt-6 flex items-center justify-center" style={{ width: '300px', margin: '0 auto' }}>
          <div className="mr-4">
            <GiArtificialHive style={{ fontSize: '48px' }} />
          </div>
          <div>
            <p className="font-bold text-xl text-red-500">NEW CARD</p>
            <p className='text-customGrey font-semibold'>This is a new card below the existing ones</p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
