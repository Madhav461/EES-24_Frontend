import React from 'react'

const FooterInputForm = () => {
  return (
    <div className=" flex  w-full h-full pt-[4rem] object-contain overflow-hidden  flex-col p-4">
    <input
      type="text"
      placeholder="Name"
      className="p-2 bg-black placeholder-pitchdeck-slide-background rounded-sm font-bruno-ace-sc text-pitchdeck-slide-background w-full h-[3rem]"
    />
  
    <input
      type="text"
      placeholder="Contact"
      className="p-2 bg-black placeholder-pitchdeck-slide-background rounded-sm font-bruno-ace-sc text-pitchdeck-slide-background mt-4 w-full h-[3rem]"
    />
  
    <input
      type="text"
      placeholder="Message"
      className="p-2 bg-black placeholder-pitchdeck-slide-background rounded-sm font-bruno-ace-sc text-pitchdeck-slide-background mt-4 w-full h-[5rem]"
    />

        {/* zig-zag pattern at the bottom of input tag */}
          <div className=" text-77xl font-libre-barcode-39 whitespace-pre-wrap inline-block w-[10rem]  h-[66px]" style={{margin:'2rem'}}>{`Elecyvt  s `}</div> */
  </div>
  
  )
}

export default FooterInputForm
