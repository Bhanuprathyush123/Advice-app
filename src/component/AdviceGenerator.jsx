import React from 'react'

function AdviceGenerator() {
     let adviceUrl = 'https://api.adviceslip.com/advice'
     const [advice,setAdvice] = React.useState('Workout EveryDay')

     const generateAdvice = () => {
          fetch(adviceUrl)
               .then((response) => response.json())
               .then(data => {
                    const newAdvice = data.slip.advice;

                    setAdvice(newAdvice)
               })
               .catch(error => {
                alert('Error Fetching Advice',error)
               })
     }

  return (
       <div className='flex flex-col  justify-center items-center '>
            {/* Display the Advice */}
            <div className=' m-40 bg-slate-200 p-20 w-full rounded-full text-3xl'>
                 <p className=''>{ advice}</p>
            </div>
            


            {/* Button to regenrate the advice */}
            <div className=' bg-slate-600 p-2 rounded-xl'>
               <button onClick={generateAdvice} className=' text-xl '>Next Advice</button>
            </div>
            
       </div>
       
  )
}

export default AdviceGenerator