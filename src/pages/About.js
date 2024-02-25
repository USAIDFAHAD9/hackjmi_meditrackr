import React from 'react'
import { MapContainer } from 'react-leaflet';

const About = () => {
  return (
    <div className='flex flex-col items-start w-7/8 md:w-5/6 mx-auto'>
      <h1 className='text-3xl md:text-4xl md:font-bold my-16 underline'>About Us !!</h1>
      <div>
        <h3 className='text-xl md:text-2xl md:font-semibold mb-8 mt-16'>We are the ELite Four : </h3>
        <p className='text-justify'>A team of 4 students - Usaid, Vidip, Arsh and Ebad pursuing their B Tech from Jamia Millia Islamia. Joined their hands together to make this web app named - MediTrackr.</p>
      </div>
      <div>
        <h3 className='text-xl md:text-2xl md:font-semibold mb-8 mt-16'>Welcome to MediTrackr : </h3>
        <p className='text-justify'>A groundbreaking web app revolutionizing the way you manage your health records. We're committed to streamlining the recordkeeping process while maintaining the highest levels of security and compliance.</p>
      </div>
      <div>
        <h3 className='text-xl md:text-2xl md:font-semibold mb-8 mt-16'>Our Mission & Vision : </h3>
        <p className='text-justify'>At MediTrackr, our mission is to equip healthcare organizations with innovative solutions that improve efficiency, reduce costs, and ultimately lead to better patient care. Through our intuitive platform, we envision a future where accurate and timely reporting becomes standard practice throughout the entire healthcare ecosystem.</p>
      </div>
    </div>
  )
}

export default About
