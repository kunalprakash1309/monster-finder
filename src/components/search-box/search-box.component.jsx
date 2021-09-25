import React from 'react'
import './search-box.style.css'

export const SearchBox = (props) => (
  <input 
  type="search" 
  placeholder="search monster" 
  onChange={props.handleChange} 
  className="search-box"
  />
)