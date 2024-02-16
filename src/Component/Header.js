import React from 'react'
import "../Css/Header.css"
const Header = () => {
   
     
  return (
    <div className='box d-flex align-items-center justify-content-between'>
        <h3>Append .</h3>
        <div className='d-flex'>
        <div className='m-2'>Home</div>
        <div className='m-2'>About</div>
        <div className='m-2'>Services</div>
        <div className='m-2'>Portfolio</div>
        <div className='m-2'>Team</div>
        <div className='m-2'>Blog</div>
        <div className='d-flex align-items-center dropButton' >
        <label for="Dropdown">Dropdown</label>
        {/* <i class="fa fa-caret-down"></i> */}
        <select className='selectDropdown' id="Dropdown">
        <option value=""></option>
       <option value="DropDown 1" className='px-5'>DropDown 1</option>
       <option value="DropDown 2">DropDown 2</option>
       <option value="DropDown 3">DropDown 3</option>
       <option value="DropDown 4">DropDown 4</option>
       <option value="DropDown 5">DropDown 5</option>
       <option value="DropDown 6">DropDown 6</option>
       </select>
       </div>
        <div className='m-2'>Contact</div>
        </div>
    <button type="" className='p-2 border-0 rounded bg-danger text-white'>Get Started</button>
 </div>
  )
}

export default Header