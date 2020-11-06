import React from 'react'
import '../styles/Menu.css'
import './SubMenu'
import SubMenu from './SubMenu'

function Menu() {
    return (
        <div className="container"> {/* ** Icon miaburton ** */}
            <div>
                <div className="box-image">
                    <img src="./LOGO.svg" alt="Mia_burton_logo" />
                </div>
            </div>


            <ul id="small-menu">  {/* **Submenu** */}
                <li style={{paddingLeft: "0px"}}>
                <div className="dropdown">
                    <button className="dropdown-button"><a className="link-box" href="#">sunglasses</a></button>
                <div className='dropdown-content'>
                    <SubMenu className="dropdown-content" />
                    </div>
               </div>
               </li>
                
                <li><a href="#" className="link-box" href="">eyeglasses</a></li>
                <li><a href="#" className="link-box" href="">accessories</a></li>
                <li><a href="#" className="link-box" href="">editorial</a></li>
                <li><a href="#" className="link-box" href="">giftcard</a></li>
                <li><a href="#" className="link-box" href=""><img src="./Search.svg" width="16px" height="16px" alt="caa" /></a></li>
            </ul>



            <div> {/* **Icons** */}
                <div className="icons-container">
                    <div><img src="./Log-in.svg" alt=""  width="20px" height="24px" /></div>
                    <div className="icon-box"><img src="./Wishlist.svg" alt="" width="20px" height="24px" /></div>
                    <div className="icon-box"><img src="./Cart.svg" alt="" width="20px" height="24px" /></div>
                </div>
            </div>
        </div>
    )
}

export default Menu