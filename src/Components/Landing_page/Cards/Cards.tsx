import React from 'react'

export default function Cards() {
  return (
    <div className='card-Container bg-zinc-100 w-full md:h-[700px]'>
      <div className="cardText pt-9 ml-10">
      <h1 className='cards-text text-2xl font-serif '>Discover Weekly</h1>
      <p className='parghContainer text-sm'>The journey of a thousand miles begins with a single step</p>
      </div>
      <div className="cards mt-7 mx-auto  flex md:flex-row flex-col md:gap-2 md:justify-center ">
        <div className="max-w-sm rounded overflow-hidden shadow-lg h-[550px] ">
       
          <img className="w-full transition ease-in-out delay-100 hover:-translate-h-1 hover:scale-110 " src={require('../../../Assets/manali1.jpg')} alt="bg_imges" />
          {/* <img className="w-full" src="" alt="Sunset in the mountains"> */}
            <div className="px-6 py-4">
              
              <div className="font-bold text-xl mb-2">Manali</div>
              
              <p className="text-gray-700 text-base">
              It is a natural divide between the valleys of Kullu and mountains of Lahaul and spiti. It attracts tourist with beautiful views and fresh snow. Here you can enjoy adventure activities such as skiing, skating, paragliding, snow scooter and more. Best time to visit Rohtang pass is in Summer.
              </p>
            </div>
            
            <button className='w-[100px] h-8 outline outline-amber-300 outline-1 ml-7 '>Explore Now</button>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg h-[550px]">
          <img className="w-full transition ease-in-out delay-100 hover:-translate-h-1 hover:scale-110" src={require('../../../Assets/taj.jpg')} alt="bg_imges" />
          {/* <img className="w-full" src="" alt="Sunset in the mountains"> */}
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Taj Mahal</div>
              <p className="text-gray-700 text-base">
              The Taj Mahal is widely considered one of the most beautiful buildings ever created. The exquisite marble structure in Agra, India, is a mausoleum, an enduring monument to the love of a husband for his favorite wife. It's also an eternal testament to the artistic and scientific accomplishments of a wealthy empire.
              </p>
            </div>
            <button className='w-[100px] h-8 outline outline-amber-300 outline-1 ml-7'>Explore Now</button>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg h-[550px]">
          <img className="w-full transition ease-in-out delay-100 hover:-translate-h-1 hover:scale-110" src={require('../../../Assets/Jaipur.jpg')} alt="bg_imges" />
          {/* <img className="w-full" src="" alt="Sunset in the mountains"> */}
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Rajasthan</div>
              <p className="text-gray-700 text-base">
              Founded in AD 1727 by Maharaja Sawai Jai Singh II, Jaipur, the capital of Rajasthan is popularly known as the Pink City. With broad avenues and spacious gardens, the city is steeped in history and culture. Here the past comes alive in magnificent forts and palaces, blushed pink, where once lived the maharajas.
              </p>
            </div>
            <button className='w-[100px] h-8 outline outline-amber-300 outline-1 ml-7'>Explore Now</button>
        </div>
      
      </div>
    </div>

  )
}
