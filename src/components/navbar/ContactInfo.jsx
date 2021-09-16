import React from 'react'

function ContactInfo() {
  const informationArray = ["Name", "Email"];
  return (
    <div className="flex justify-between items-center p-4 w-auto md:w-4/5 md:mx-auto">
        {informationArray.map((item) => (
          <div className="hidden md:flex text-lg font-semibold font-sans" key={item}>
            {item}
          </div>
        ))}
        <div className="flex text-lg font-semibold font-sans">Phone No.</div>
      </div>
  )
}

export default ContactInfo
