import Logo from '../assets/Logo-3.png'
import {Link} from 'react-router-dom'
import { TiHomeOutline } from "react-icons/ti";
import { GrDocumentText } from "react-icons/gr";
import { FaGear } from "react-icons/fa6";
import { MdExitToApp } from "react-icons/md";
import { HiOutlineClipboardDocumentCheck } from "react-icons/hi2";

import './NavBarLogado.css'



export default function NavBarLogado() {
  return (
    <div className='headerContainer'>
       <nav className='header'>
          <img src={Logo} className='logo' alt="Logo Empresa " />
          <ul className='linkContainer'>
              <Link to='/Alocar' className='linkLogado'> <TiHomeOutline className='iconNavBarLogado'/> Home</Link>
              <Link to='/Alocar' className='linkLogado'><GrDocumentText className='iconNavBarLogado'/> Alocar</Link>
              <Link to='/Alocar' className='linkLogado'><HiOutlineClipboardDocumentCheck className='iconNavBarLogado'/> Solicitações</Link>
              <Link to='/ConfigUsers' className='linkLogado'> <FaGear className='iconNavBarLogado'/> Configurações</Link>
              <Link to='/' className='linkLogado'><MdExitToApp className='iconNavBarLogado'/> Sair</Link>
          </ul>
          <div></div>
      </nav>
    </div>
  )
}
