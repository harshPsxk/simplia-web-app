import React from 'react';
import './App.css';
import Logo from './assests/images/logo-simplia-reps.svg';
import backRed from './assests/images/red-back.jpg';
import dataAi from './assests/images/data-ai.gif';
import smartSell from './assests/images/selling.gif';
import tracking from './assests/images/tracking.gif';
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
import { PiPhonePlusFill } from "react-icons/pi";
import { MdOutlineMailOutline } from "react-icons/md";

import blogImage1 from './assests/images/blog-one.gif'
import blogImage2 from './assests/images/seo.gif';
import blogImage3 from './assests/images/ai-website.gif'

import joinus from './assests/images/joinus.png';

import footerlogo from './assests/images/white-simplie-logo.webp';

import { Input } from 'antd';

import ReadMore from './components/ReadMore';
import { smartTrackingContent, smartSellContent, introductionAi } from './content';

function App() {

  return (
    <div className="App">

      <header className="flex items-center justify-start p-4 m-4">
        <img src={Logo} alt="Logo" className="h-12 mr-4" />

        {/* Navigation Menu on the right */}
        <nav className='ml-auto'>
          <ul className="flex space-x-6 items-center"> {/* Added 'items-center' */}
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

            {/* Wrap Search Bar and MenuOutlined in a div */}
            <li>
              <div className="flex items-center">
                <Input.Search
                  placeholder="Search"
                  onSearch={value => console.log(value)}
                  style={{ width: 250 }}
                />
                <a href="#blogs" className='ml-8 text-2xl'>
                  <MenuOutlined className="text-customRed" />
                </a>
              </div>
            </li>
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


      <div className='p-4 w-full bg-customBodySecondSection/25 text-center rounded-lg'>
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


        <div className="flex justify-center space-x-12 mt-8">
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
          <button className="w-80 mt-8 mb-8 rounded-full px-6 py-3 bg-red-500 text-customGreyOne font-bold hover:bg-red-700">
            Contact Us
          </button>
        </div>
      </div>

      <div className="p-4 bg-customBodyThirdSection/50 flex items-center" style={{ display: 'grid', placeItems: 'center', height: '120vh' }}>
        {/* Third Card */}
        <div className='rounded-lg' style={{ width: '1400px', height: '300px', boxShadow: '0 4px 6px rgba(0, 0, 0, .4)', display: 'flex', alignItems: 'flex-start' }}>
          <div className="mr-4 w-1/4">
            <img
              src={dataAi}
              alt="Data AI GIF"
              style={{
                width: '400px',
                height: '300px',
                borderRadius: '0.375rem'
              }}
            />
          </div>

          {/* Right side (Text Content) */}
          <div className="flex-grow flex flex-col justify-start w-3/4">
            <p className="font-bold text-2xl text-red-500/75 mt-2">Introducing The Base App: Revolutionizing Data Management with AI</p>
            <p className='text-customGrey/75 text-lg font-semibold mt-4'>
              <ReadMore {...introductionAi} />
            </p>
          </div>
        </div>

        <div className='rounded-lg' style={{ width: '1400px', height: '300px', boxShadow: '0 4px 6px rgba(0, 0, 0, .4)', display: 'flex', alignItems: 'flex-start' }}>
          <div className="mr-4 w-1/4">
            <img
              src={smartSell}
              alt="Data AI GIF"
              style={{
                width: '400px',
                height: '300px',
                borderRadius: '0.375rem'
              }}
            />
          </div>

          {/* Right side (Text Content) */}
          <div className="flex-grow flex flex-col justify-start w-3/4">
            <p className="font-bold text-xl text-red-500/75 mt-2 text-2xl">
              Smart Sell</p>
            <p className='text-customGrey/75 text-lg font-semibold mt-4'>
              <ReadMore {...smartSellContent} />
            </p>
          </div>
        </div>

        <div className='rounded-lg' style={{ width: '1400px', height: '300px', boxShadow: '0 4px 6px rgba(0, 0, 0, .4)', display: 'flex', alignItems: 'flex-start' }}>
          <div className="mr-4 w-1/4">
            <img
              src={tracking}
              alt="Data AI GIF"
              style={{
                width: '400px',
                height: '300px',
                borderRadius: '0.375rem'
              }}
            />
          </div>

          {/* Right side (Text Content) */}
          <div className="flex-grow flex flex-col justify-start w-3/4">
            <p className="font-bold text-xl text-red-500/75 mt-2 text-2xl">
              Smart Tracking
            </p>
            <p className='text-customGrey/75 text-lg font-semibold mt-4'>
              <ReadMore {...smartTrackingContent} />
            </p>
          </div>
        </div>

      </div>

      <div className="p-4 bg-customBodyFourthSection/50 flex items-center" style={{ display: 'grid', placeItems: 'center' }}>
        <div className='text-4xl font-semibold text-red-500/60'>
          Videos
        </div>

        <div className='text-5xl font-semibold text-customGrey/70 mt-4'>
          Know More About Us
        </div>

        {/* Video Cards */}
        <div className="flex justify-center space-x-20 mt-6 mb-6">
          {/* Video Card 1 */}
          <div className="bg-white rounded-lg shadow-md p-4" style={{ width: '450px', height: '280px', boxShadow: '0 4px 6px rgba(0, 0, 0, .2)' }}>
            <video width="100%" height="100%" controls>
              <source src="./assests/videos/SimpliaLaunch.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            <div class="items-center flex justify-center mt-4 font-bold text-customGrey/70 text-3xl">
              Simplia Launch
            </div>
          </div>

          {/* Video Card 2 */}
          <div className="bg-white rounded-lg shadow-md p-4" style={{ width: '450px', height: '280px', boxShadow: '0 4px 6px rgba(0, 0, 0, .2)' }}>
            <video width="100%" height="100%" controls>
              <source src="./assests/videos/SimpliaAgent.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            <div class="items-center flex justify-center mt-4 font-bold text-customGrey/70 text-3xl">
              Simplia Agent
            </div>

          </div>
        </div>

      </div>


      <div className="p-4 bg-customBodyThirdSection/50 flex items-center" style={{ display: 'grid', placeItems: 'center' }}>
        <div className='text-5xl font-semibold text-customGrey/70 mt-8'>
          Blogs
        </div>
        <div className="flex justify-center space-x-20 mt-8">
          {/* Blog Card 1 */}
          <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center" style={{ width: '320px', height: '320px', boxShadow: '0 4px 6px rgba(0, 0, 0, .4)' }}>
            <img
              src={blogImage1}
              alt=""
              width="200"
              height="150"
              style={{ borderRadius: '0.375rem' }}
            />
            <p className="text-xl font-semibold mt-4">Customer Website Experience</p>
            <button className="bg-customBlueReadMore text-white px-4 py-2 mt-6 rounded-lg">Read More</button>
          </div>

          {/* Blog Card 2 */}
          <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center" style={{ width: '320px', height: '320px', boxShadow: '0 4px 6px rgba(0, 0, 0, .4)' }}>
            <img
              src={blogImage2}
              alt=""
              width="200"
              height="150"
              style={{ borderRadius: '0.375rem' }}
            />
            <p className="text-xl font-semibold mt-4">Why SEO Marketing</p>
            <button className="bg-customBlueReadMore text-white px-4 py-2 mt-6 rounded-lg">Read More</button>
          </div>

          {/* Blog Card 3 */}
          <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center" style={{ width: '320px', height: '320px', boxShadow: '0 4px 6px rgba(0, 0, 0, .4)' }}>
            <img
              src={blogImage3}
              alt=""
              width="200"

              style={{ borderRadius: '0.375rem', height: "120" }}
            />
            <p className="text-xl font-semibold mt-4">AI Integrated Website</p>
            <button className="bg-customBlueReadMore text-white px-4 py-2 mt-6 rounded-lg">Read More</button>
          </div>
        </div>
      </div>

      <div className="p-4 bg-customBodyFifthSection/75">
        <div className="flex justify-center items-center mt-20">
          <div className="w-1/2 ml-20">
            <div className="text-3xl font-semibold text-red-500/70">
              Join Us
            </div>
            <div className="text-5xl font-semibold text-customGrey/80 mt-2">
              Become a Reps Agent
            </div>

            <div className="text-xl font-medium text-customGrey/80 mt-2">
              We are dedicated to helping sales agents like you earn more money and succeed in your career. Our team of experts provides the resources and support you need to reach your full potential. Whether you're just starting out or have been in sales for years, we have something for you.
            </div>
          </div>
          <div className="ml-4 w-1/4">
            <img
              src={joinus}
              alt="Data AI GIF"
              style={{
                width: '400px',
                height: '300px',
                borderRadius: '4px'
              }}
            />
          </div>
        </div>

        <div className="text-2xl flex items-center justify-center font-semibold text-red-500/70 mt-10">
          Take the first step towards success and join us today!
        </div>

        {/* Input Fields */}
        <div className="ml-auto p-4 mt-4">
          <div className="flex mb-4 space-x-4 items-center justify-center ">
            <Input placeholder="First Name" style={{ width: '18%' }} />
            <Input placeholder="Last Name" style={{ width: '18%' }} />
          </div>
          <div className="flex mt-6 space-x-4 items-center justify-center ">
            <Input placeholder="Email" style={{ width: '18%' }} />
            <Input placeholder="Mobile Number" style={{ width: '18%' }} />
          </div>
        </div>

        <div className="text-xl flex items-center justify-center font-semibold text-red-500/70 mt-4">
          <button className="w-40 h-8 mb-8 rounded-lg bg-red-500 text-customGreyOne font-bold hover:bg-red-700">
            Submit
          </button>
        </div>


      </div>

      <div className='bg-customBlueFooter'>

        <div className="pl-4 pt-10 pb-28 flex">
          <div className="flex items-center justify-center w-1/6 pt-32 pb-18 border-r-4 border-white">
            <img
              src={footerlogo}
              alt=""
              width="200"
              style={{ borderRadius: '0.375rem', height: "120" }}
            />

          </div>

          <div className='w-5/6 mr-4 ml-4 flex'>

            <div className='w-1/3'>
              <div className='border-b-4 border-white font-bold text-white indent-1 tracking-wider pb-2'>
                <p className='text-xl'>
                  Contact Us
                </p>
                <p className='text-base font-semibold mt-1'>
                  10801 National Blvd. Suite 500
                </p>
                <p className='text-base font-semibold mt-1'>
                  Los Angeles California, 90064
                </p>
              </div>

              <div className='flex mt-4'>
                <div className='flex text-white text-2xl'>
                  <PiPhonePlusFill />
                  <div className='font-semibold text-white indent-1 tracking-wider text-base'>
                    Phone: +1-866-806-4111
                  </div>
                </div>
              </div>

              <div className='flex mt-4'>
                <div className='flex text-white text-2xl'>
                  <MdOutlineMailOutline />
                  <div className='font-semibold text-white indent-1 tracking-wider text-base'>
                    info@simplia.com
                  </div>
                </div>
              </div>
            </div>

            <div className='w-1/4 ml-10'>
              <div className='font-bold text-white indent-1 tracking-wider pb-2'>
                <p className='text-xl'>
                  Simplia
                </p>
                <p className='text-base font-semibold mt-1'>
                  About Us
                </p>
                <p className='text-base font-semibold mt-1'>
                  Our Way
                </p>
                <p className='text-base font-semibold mt-1'>
                  Terms of Use
                </p>
                <p className='text-base font-semibold mt-1'>
                  Privacy Policy
                </p>
              </div>
            </div>

            <div className='w-1/4 '>
              <div className='font-bold text-white indent-1 tracking-wider pb-2'>
                <p className='text-xl'>
                  Business
                </p>
                <p className='text-base font-semibold mt-1'>
                  Our Services
                </p>
                <p className='text-base font-semibold mt-1'>
                  Our ShowCase
                </p>
              </div>
            </div>

            <div className='w-1/4 '>
              <div className='font-bold text-white indent-1 tracking-wider pb-2'>
                <p className='text-xl'>
                  Personal
                </p>
                <p className='text-base font-semibold mt-1'>
                  Coming Soon
                </p>
              </div>
            </div>

            <div className='w-1/4 '>
              <div className='font-bold text-white indent-1 tracking-wider pb-2'>
                <p className='text-xl'>
                  Marketplace
                </p>
                <p className='text-base font-semibold mt-1'>
                  Coming Soon
                </p>
              </div>
            </div>

            <div className='w-1/4 '>
              <div className='font-bold text-white indent-1 tracking-wider pb-2'>
                <p className='text-xl'>
                  Access
                </p>
                <p className='text-base font-semibold mt-1'>
                  Sign In
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-2xl flex items-center justify-center font-semibold text-white mt-2 pb-14">
          Copyright © 2023 Simplia, Inc.
        </div>
      </div>
    </div >
  );
}

export default App;
