import React from 'react';



function App() {
  return (
    <div className='w-screen h-screen bg-gradient-radial'>
      <div className='h-full w-full flex justify-between items-center p-8'>
       <div className='p-8 w-[60%] h-[90%] rounded-lg'>
          <img className='w-full h-full' src='img/logo.svg' alt='logo' />
       </div>
        <div className='w-[40%] text-yellow-500 h-full flex justify-center items-center font-bold text-[3rem] animate-pulse '>
          <h1>Coming Soon</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
