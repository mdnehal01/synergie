import TitleSection from '@/components/landing-page/title-section'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'
import Banner from '@/../public/images/appBanner.png';
import { CLIENTS } from '@/lib/constants';
import Cal from '@/../public/images/cal.png';

const HomePage = () => {
    return (
        <>
    <section
        className=" overflow-hidden
      px-4
      sm:px-6
      mt-10
      sm:flex
      sm:flex-col
      gap-4
      md:justify-center
      md:items-center"
      >
        <TitleSection
          pill="✨ Your Workspace, Perfected"
          title="All-In-One Collaboration and Productivity Platform"
        />
        <div
          className="bg-white
          p-[2px]
          mt-6
          rounded-xl
          bg-gradient-to-r
          from-primary
          to-brand-primaryBlue
          sm:w-[300px]
        "
        >
          <Button
            variant="secondary"
            className=" w-full
            rounded-[10px]
            p-6
            text-2xl
            bg-background
          "
          >
            Get Cypress Free
          </Button>
        </div>
        <div
          className="md:mt-[-90px]
          sm:w-full
          w-[750px]
          flex
          justify-center
          items-center
          mt-[-40px]
          relative
          sm:ml-0
          ml-[-50px]
        "
        >
          <Image
            src={Banner}
            alt="Application Banner"
          />
          <div
            className="bottom-0
            top-[50%]
            bg-gradient-to-t
            dark:from-background
            left-0
            right-0
            absolute
            z-10
          "
          ></div>
        </div>
      </section>
        
        <section className='relative'>
            <div className="overflow-hidden flex
              after:content['']
            after:dark:from-brand-dark
              fter:to-transparent
              after:from-background
              after:bg-gradient-to-l
              after:right-0
              after:bottom-0
              after:top-0
              after:w-20
              after:z-10
              after:absolute

            before:content['']
          before:dark:from-brand-dark
            before:to-transparent
            before:from-background
            before:bg-gradient-to-r
            before:left-0
            before:top-0
            before:bottom-0
            before:w-20
            before:z-10
            before:absolute
        ">
            {[...Array(2)].map((index) => <div key={index} className='flex flex-nowrap animate-slide'>
                {CLIENTS.map((client, inIndex) => <div key={inIndex} className='relative w-[200px] m-20 shrink-0 flex items-center'>
                    <Image src={client.logo} width={200} alt={client.alt} height={200}/>
                </div>)}
            </div>)}
        </div>
        </section>
        
        <section className="px-4 sm:px-6 flex justify-center items-center flex-col relative">
          <div className="w-[30%] blur-[120px] rounded-full h-32 absolute bg-brand-primaryPurple -z-10 top-24"/>
            <TitleSection
              pill="Feature"
              title="Keep track of all your meetings in one place"
              subheading="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse odit blanditiis laudantium. Corporis, provident!"
            />

  <div className="mt-10 max-w-[450px] flex justify-center items-center sm:ml-0 relative rounded-2xl border-8 border-washed-purple-300 border-opacity-10">
    <Image
      src={Cal}
      alt="Calendar Preview"
      height={400}
      className="rounded-2xl"
    />
  </div>
</section>
        {/* TODO: Complete testimonials by own   */}
        <section className='px-4 sm:px-6 flex justify-center items-center flex-col relative'>
          <div className="w-full blur-[120px] rounded-full h-32 absolute bg-brand-primaryPurple -z-100 top-56"/>
          <div className='mt-20 px-4 sm:px-6 flex flex-col overflow-x-hidden overflow-visible'></div>
            <TitleSection title='Trusted by all' pill='Testimonials' subheading='Join thousands of satisfied user since the launch'/>
        </section>

        {/* TODO: add a section for subscription cards
         */}
      </>
    )
}

export default HomePage