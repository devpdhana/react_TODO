import React from 'react'

function Footer({length}) {

    const yearOf = ()=> {
        let currentYear= new Date();
        return currentYear.getFullYear();

    }
  return (
    <footer>{length}list available Copyright &copy; {yearOf()}</footer>
  )
}

export default Footer