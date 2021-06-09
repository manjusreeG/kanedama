import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = ()=>{
 return ( <div style={{height:'100%',backgroundColor:'#cbc2f0'}}>
 <ul style={{marginRight:'20px'}}>
    <li><Link to='/'> Accounts</Link></li>
    <li><Link to='/Profile'> Profile</Link></li>
 </ul>
 </div>)
}

export default Navbar;