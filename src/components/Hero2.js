import React from "react";

function Hero2() {
  return (
    <div>
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img class="object-cover object-center rounded" alt="hero" src="https://images.pexels.com/photos/3938022/pexels-photo-3938022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          </div>
          <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-end md:text-right mb-16 md:mb-0 items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Streamline Medical History Sharing with
              <br class="hidden lg:inline-block" />
              Healthcare Providers for Effortless Collaboration
            </h1>
            <p class="mb-8 leading-relaxed">
              With "MediTrackr," our innovative platform simplifies the process, allowing patients to securely share their medical information with healthcare professionals seamlessly. By leveraging cutting-edge technology, MediTrackr
              facilitates efficient communication and collaboration between patients and providers, leading to improved healthcare outcomes. Experience the future of healthcare management with MediTrackr - where sharing medical history is
              as easy as a click.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero2;
