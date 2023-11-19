import React from 'react';
import './App.css';
import Logo from './assests/images/logo-simplia-reps.svg';
import backRed from './assests/images/red-back.jpg';
import dataAi from './assests/images/data-ai.gif';
import { MenuOutlined } from '@ant-design/icons';

import { FcDatabase } from "react-icons/fc";
import { FcMoneyTransfer } from "react-icons/fc";
import { FcEnteringHeavenAlive } from "react-icons/fc";
import { FcGlobe } from "react-icons/fc";
import { FcSms } from "react-icons/fc";
import { FcFaq } from "react-icons/fc";
import { FcClapperboard } from "react-icons/fc";
import { FcComboChart } from "react-icons/fc";
import { FcCurrencyExchange } from "react-icons/fc";
import { FcNeutralDecision } from "react-icons/fc";
import { FcBusinessContact } from "react-icons/fc";




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


      <div className='p-4 w-full bg-customBodySecondSection/75 text-center rounded-lg'>
        <div className='text-4xl font-semibold text-red-500/60'>
          Helpful Links
        </div>

        <div className='text-5xl font-semibold text-customGrey/60 '>
          Resources for you
        </div>

        <div className="flex justify-center space-x-12 mt-6">
          {/* First Card */}
          <div className="bg-white rounded-lg shadow-md p-4 flex items-center hover:border border-customBorderPurple/50" style={{ width: '700px', height: '120px', boxShadow: '0 4px 6px rgba(0, 0, 0, .4)' }}>
            <div className="mr-4 flex items-center">
              <div>
                <FcMoneyTransfer style={{ fontSize: '48px' }} />
              </div>
            </div>
            <div className="flex-grow">
              <p className="font-bold text-xl text-red-500/60 ">SEND PAYMENT LINK</p>
              <p className='text-customGrey/60 font-bold'>
                Send customers this link for them to complete their first months payment
              </p>
            </div>
          </div>

          {/* Second Card */}
          <div className="bg-white rounded-lg shadow-md p-4 flex items-center hover:border border-customBorderPurple/50" style={{ width: '700px', height: '120px', boxShadow: '0 4px 6px rgba(0, 0, 0, .4)' }}>
            <div className="mr-4 flex items-center">
              <div>
                <FcDatabase style={{ fontSize: '48px' }} />
              </div>
            </div>
            <div className="flex-grow">
              <p className="font-bold text-xl text-red-500/60">SIMPLIA DECK</p>
              <p className='text-customGrey/60 font-bold'>
                A detailed presentation on Simplia’s services and guarantees that everything is right
              </p>
            </div>
          </div>
        </div>


        <div className="flex justify-center space-x-12 mt-6">
          {/* First Card */}
          <div className="bg-white rounded-lg shadow-md p-4 flex items-center hover:border border-customBorderPurple/50" style={{ width: '700px', height: '120px', boxShadow: '0 4px 6px rgba(0, 0, 0, .4)' }}>
            <div className="mr-4 flex items-center">
              <div>
                <FcEnteringHeavenAlive style={{ fontSize: '48px' }} />
              </div>
            </div>
            <div className="flex-grow">
              <p className="font-bold text-xl text-red-500/60">WEBSITE EXAMPLE</p>
              <p className='text-customGrey/60 font-bold'>
                Show customers websites Simplia has created related to their industry
              </p>
            </div>
          </div>

          {/* Second Card */}
          <div className="bg-white rounded-lg shadow-md p-4 flex items-center hover:border border-customBorderPurple/50" style={{ width: '700px', height: '120px', boxShadow: '0 4px 6px rgba(0, 0, 0, .4)' }}>
            <div className="mr-4 flex items-center">
              <div>
                <FcGlobe style={{ fontSize: '48px' }} />
              </div>
            </div>
            <div className="flex-grow">
              <p className="font-bold text-xl text-red-500/60">SIMPLIA WEBSITE</p>
              <p className='text-customGrey/60 font-bold'>
                The main Simplia.com website that includes testimonials
              </p>
            </div>
          </div>
        </div>


        <div className="flex justify-center space-x-12 mt-6">
          {/* First Card */}
          <div className="bg-white rounded-lg shadow-md p-4 flex items-center hover:border border-customBorderPurple/50" style={{ width: '700px', height: '120px', boxShadow: '0 4px 6px rgba(0, 0, 0, .4)' }}>
            <div className="mr-4 flex items-center">
              <div>
                <FcSms style={{ fontSize: '48px' }} />
              </div>
            </div>
            <div className="flex-grow">
              <p className="font-bold text-xl text-red-500/60">Q&A LINK</p>
              <p className='text-customGrey/60 font-bold'>
                Monday – Friday: Every day at 11 am, join the live Q&amp;A
                with Simplia’s CEO to learn how to sell and ask questions
              </p>
            </div>
          </div>

          {/* Second Card */}
          <div className="bg-white rounded-lg shadow-md p-4 flex items-center hover:border border-customBorderPurple/50" style={{ width: '700px', height: '120px', boxShadow: '0 4px 6px rgba(0, 0, 0, .4)' }}>
            <div className="mr-4 flex items-center">
              <div>
                <FcClapperboard style={{ fontSize: '48px' }} />
              </div>
            </div>
            <div className="flex-grow">
              <p className="font-bold text-xl text-red-500/60">SIMPLIA VIDEO</p>
              <p className='text-customGrey/60 font-bold'>
                Use this short video to show customers the value of our services and commitments
              </p>
            </div>
          </div>
        </div>


        <div className="flex justify-center space-x-12 mt-6">
          {/* First Card */}
          <div className="bg-white rounded-lg shadow-md p-4 flex items-center hover:border border-customBorderPurple/50" style={{ width: '700px', height: '120px', boxShadow: '0 4px 6px rgba(0, 0, 0, .4)' }}>
            <div className="mr-4 flex items-center">
              <div>
                <FcComboChart style={{ fontSize: '48px' }} />
              </div>
            </div>
            <div className="flex-grow">
              <p className="font-bold text-xl text-red-500/60">TRACK SALES</p>
              <p className='text-customGrey/60 font-bold'>
                Use this Sales tracker to record each of your sales helping gain helpful insight for every element
              </p>
            </div>
          </div>

          {/* Second Card */}
          <div className="bg-white rounded-lg shadow-md p-4 flex items-center hover:border border-customBorderPurple/50" style={{ width: '700px', height: '120px', boxShadow: '0 4px 6px rgba(0, 0, 0, .4)' }}>
            <div className="mr-4 flex items-center">
              <div>
                <FcFaq style={{ fontSize: '48px' }} />
              </div>
            </div>
            <div className="flex-grow">
              <p className="font-bold text-xl text-red-500/60">FAQ</p>
              <p className='text-customGrey/60 font-bold'>
                Still have questions? Check our FAQ's that will guide you with all your simple queries.
              </p>
            </div>
          </div>
        </div>


        <div className="flex justify-center space-x-12 mt-6">
          {/* First Card */}
          <div className="bg-white rounded-lg shadow-md p-4 flex items-center hover:border border-customBorderPurple/50" style={{ width: '700px', height: '120px', boxShadow: '0 4px 6px rgba(0, 0, 0, .4)' }}>
            <div className="mr-4 flex items-center">
              <div>
                <FcCurrencyExchange style={{ fontSize: '48px' }} />
              </div>
            </div>
            <div className="flex-grow">
              <p className="font-bold text-xl text-red-500/60">GET PAID</p>
              <p className='text-customGrey/60 font-bold'>
                Get set up with direct deposit and get paid weekly every Friday for the previous week
              </p>
            </div>
          </div>

          {/* Second Card */}
          <div className="bg-white rounded-lg shadow-md p-4 flex items-center hover:border border-customBorderPurple/50" style={{ width: '700px', height: '120px', boxShadow: '0 4px 6px rgba(0, 0, 0, .4)' }}>
            <div className="mr-4 flex items-center">
              <div>
                <FcNeutralDecision style={{ fontSize: '48px' }} />
              </div>
            </div>
            <div className="flex-grow">
              <p className="font-bold text-xl text-red-500/75">SMART AI</p>
              <p className='text-customGrey/75 font-semibold'>
                The all-in-one search engine tool made with Smart Technology that gives one-stop solution for everything
              </p>
            </div>
          </div>
        </div>


        <div className="flex justify-center space-x-12 mt-6">
          {/* First Card */}
          <div className="bg-white rounded-lg shadow-md p-4 flex items-center hover:border border-customBorderPurple/50" style={{ width: '700px', height: '120px', boxShadow: '0 4px 6px rgba(0, 0, 0, .4)' }}>
            <div className="mr-4 flex items-center">
              <div>
                <FcBusinessContact style={{ fontSize: '48px' }} />
              </div>
            </div>
            <div className="flex-grow">
              <p className="font-bold text-xl text-red-500/75">REQUEST BROCHURES ? BUSINESS CARDS</p>
              <p className='text-customGrey/75 font-semibold'>
                Get customized printed and digital marketing material. Carry the tools you need to make a sale with you
              </p>
            </div>
          </div>
        </div>


        <div className="mt-6 space-x-4">
          <button className="w-80 rounded-full px-6 py-3 bg-red-500 text-customGreyOne font-bold hover:bg-red-700">
            Contact Us
          </button>
        </div>
      </div>

      <div className="p-4 bg-customBodyThirdSection/50 flex items-center" style={{ display: 'grid', placeItems: 'center', height: '70vh' }}>
        {/* Third Card */}
        <div className='rounded-lg' style={{ width: '1400px', height: '350px', boxShadow: '0 4px 6px rgba(0, 0, 0, .4)', display: 'flex', alignItems: 'center' }}>
          <div className="mr-4">
            <img
              src={dataAi}
              alt="Data AI GIF"
              style={{
                width: '450px',
                height: '350px',
                borderRadius: '0.375rem'
              }}
            />
          </div>

          {/* Right side (Text Content) */}
          <div className="flex-grow">
            <p className="font-bold text-xl text-red-500/75">Introducing The Base App: Revolutionizing Data Management with AI</p>
            <p className='text-customGrey/75 font-semibold'>
              The quick brown fox jumps over the lazy dog.
            </p>
          </div>
        </div>
      </div>


    </div >
  );
}

export default App;
