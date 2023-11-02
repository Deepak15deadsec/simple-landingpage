import React, { useEffect } from 'react';

const TextEffect1 = () => {

  useEffect(() => {
    let style1 = document.createElement("style")
    let style2 = document.createElement("style")
    let after = document.getElementById("after-te1")
    let before = document.getElementById("before-te1")
    const setKeyframesRules = (n, start = 0) => {
      let steps = ""
      for (let i = start; i <= n; i++) {
        let percent = (i / n) * 100
        let random1 = `${Math.random() * 150}px`
        let random2 = `${Math.random() * 150}px`
        steps = steps.concat(`${percent}% { clip: rect(${random1}, 9999px, ${random2}, 0) } `)
      }
      return steps
    }
    let keyframes1 = `@keyframes glitch-anim-1 { ${setKeyframesRules(24)} }`
    let keyframes2 = `@keyframes glitch-anim-2 { ${setKeyframesRules(32, 2)} }`
    style1.innerHTML = keyframes1
    style2.innerHTML = keyframes2
    after.appendChild(style1)
    before.appendChild(style2)
    after.style.animation = "glitch-anim-1 10s infinite linear alternate-reverse"
    before.style.animation = "glitch-anim-2 6s infinite linear alternate-reverse"
  }, [])

  //https://res.cloudinary.com/dgjxmcrkg/image/upload/v1678778021/avni-logo1_p0fzel.webp
  

  return (
    <div className='w-screen h-screen bg-gradient-radial'>
      <div className='h-full w-full flex justify-between px-[5rem] items-center '>
        <div className=' w-[36%] h-[70%] rounded-lg'>
          <img className='w-full h-full' src='https://res.cloudinary.com/dtawuvlbw/image/upload/v1698653954/cld-sample-2.jpg' alt='logo' />
        </div>
        <div className='  h-full flex justify-center items-center    '>

          <h1 className="text-yellow-400 text-[5rem] font-[500]  relative inline-block">
            <span id="before-te1" className="absolute top-0 left-0.5 w-full h-full bg-transparent" style={{ textShadow: "-2px 0 #49FC00", clipPath: "rect(24px, 550px, 90px, 0)" }} aria-hidden="true">Coming Soon</span> {/* glitch::before */}
            Coming Soon
            <span id="after-te1" className="absolute top-0 -left-0.5 w-full h-full bg-transparent" style={{ textShadow: "-2px 0 spin(#49FC00, 180)", clipPath: "rect(85px, 550px, 140px, 0)" }} aria-hidden="true">Coming Soon</span> {/* glitch::after */}
          </h1>
        </div>
      </div>
    </div>


    // <div className='w-screen h-screen bg-[#434343] lg:overflow-hidden md:overflow-hidden overflow-scroll px-[2rem] pt-[2rem] md:pb-[0rem] pb-[3rem] lg:pb-[0rem]'>
      
      
    //   <div className=' xl:w-[4%] xl:h-[12%] lg:w-[5%] lg:h-[11%] md:w-[5%] md:h-[10%] w-[15%] h-[9%] rounded-lg'>
    //     <img className='w-full h-full' src='https://res.cloudinary.com/dgjxmcrkg/image/upload/v1678778021/avni-logo2_p0fzel.webp' alt='logo' />
    //   </div>


    //   <div className='flex flex-col  justify-center  items-center  mt-[4rem]  '>

    //     <div className='flex flex-col h-full   justify-center items-center  '>

    //       <h1 className="text-[#FFFFFF]  lg:text-[4.5rem] md:text-[4.5rem] text-[3.5rem] font-mono leading-[5.5rem] font-[500] text-center relative inline-block">

    //         Reward

    //       </h1>

    //       <div className='lg:-mt-[7rem] md:-mt-[7rem] -mt-[2.5rem] '>
    //         <img src='/img/smile.svg' />
    //       </div>

    //       <h1 className="text-[#FFFFFF] lg:text-[4.5rem] md:text-[4.5rem] text-[3.5rem] font-mono font-[500] -mt-[2rem] text-center relative inline-block">

    //         Repeat

    //       </h1>

    //       <p className="text-[#FFFFFF] text-[2rem] font-mono font-[400] lg:mt-[4rem] mt-[1rem] lg:leading-[3rem] md:leading-[3rem] leading-[2rem] text-center relative inline-block">
    //         every receipt will soon unlock your smile
    //       </p>





    //       {/* <div className='w-[12%] h-[15%] ml-[40rem] -mt-[7rem] justify-right items-right rounded-lg'>
    //         <img src='/img/newqr.png' />
    //       </div> */}
    //     </div>

    //   </div>

    //   <div className='lg:flex md:hidden hidden justify-end mt-[4.2rem]'>
    //     <div className='rounded-2xl flex w-[19%] h-full p-4 justify-between bg-white'>
    //       <div className='mt-[3.25rem]'>
    //         <a href="https://t.me/avniclub" className='text-black mt-[10rem] hover:text-[#57CC99] font-[700] text-decoration-line: underline'>join the club </a>

    //       </div>


    //       <div className='w-[53%] h-[56%]   justify-right items-right rounded-lg'>
    //         <img src='/img/newqr.png' />
    //       </div>
    //     </div>
    //   </div>

    //   <div className='lg:hidden md:hidden flex px-[3rem] justify-center mt-[2rem]'>
    //     <div className='rounded-2xl flex flex-col space-y-3 justify-center items-center h-full p-4  bg-white'>
    //       <div className='mt-[0rem]'>
    //         <a href="https://t.me/avniclub" className='text-black mt-[5rem] hover:text-[#57CC99] font-[700] text-decoration-line: underline'>join the club </a>

    //       </div>


    //       <div className='w-[43%] h-[46%]   justify-right items-right rounded-lg'>
    //         <img src='/img/newqr.png' />
    //       </div>
    //     </div>
    //   </div>

    //   <div className='lg:hidden md:flex hidden justify-end mt-[4.2rem]'>
    //   <div className='rounded-2xl flex w-[32%] h-full p-4 justify-between bg-white'>
    //       <div className='mt-[3.25rem]'>
    //         <a href="https://t.me/avniclub" className='text-black mt-[5rem] hover:text-[#57CC99] font-[700] text-decoration-line: underline'>join the club </a>

    //       </div>


    //       <div className='w-[45%] h-[48%]   justify-right items-right rounded-lg'>
    //         <img src='/img/newqr.png' />
    //       </div>
    //     </div>
    //   </div>


    // </div>
  );
}

export default TextEffect1;
