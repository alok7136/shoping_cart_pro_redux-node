import React from 'react'
import {Link} from 'react-router-dom';

export default function SideDrawer({show,click}) {
  const sideDrawerclass=["sidedrawer"];

  if(show){
    sideDrawerclass.push("show")
  }
  return<div className={sideDrawerclass.join("")}>
<ul className='sidedrawer_links' onClick={click}>
<li>
 <Link to='/cart'>
 <i className='fas fa-shopping-cart'></i>
   <span>
   Cart<span className='sidedrawar__cartbadge'>0</span>
   </span>
 </Link>
</li>
<li>
 <Link to='/'>
   Shop
 </Link>
</li>
</ul>
  </div>
}
