import { Dropdown } from "primereact/dropdown"
import { useState } from "react";

const Header = () => {
  const [selectedCity, setSelectedCity] = useState(null);

  const cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' }
  ];
  return (
        <header className="d-flex align-items-center justify-content-between w-100">
          <div className="d-flex w-100 align-items-center justify-content-between">
           <a href="/"><img src="/assets/images/logo.png" alt="" /></a>
           <div className="">
            Header
           </div>
           <div className="">
             <a href=""></a>
             <a href=""></a>
             <Dropdown dropdownIcon={(options) => 
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...options.iconProps}>
        <g id="chevron-down">
            <path d="M12,15.25a.74.74,0,0,1-.53-.22l-5-5A.75.75,0,0,1,7.53,9L12,13.44,16.47,9A.75.75,0,0,1,17.53,10l-5,5A.74.74,0,0,1,12,15.25Z"/>
        </g>
    </svg>} />

             <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name" 
                placeholder="Select a City" className="" />

           </div>
          </div>
          <div className="user-profile"><img src="/assets/images/user.png" alt="" /></div>
        </header>
  )
}

export default Header