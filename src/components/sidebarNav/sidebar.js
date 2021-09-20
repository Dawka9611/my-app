import {useState} from 'react'   
import { AiFillHome } from "react-icons/ai"
import { MdAccountCircle } from "react-icons/md"
import { BsPersonPlusFill } from "react-icons/bs"
import { SidebarItem } from '../SidebarItem/sidebarItem'
import styles from './sidebar.module.css'



const Sidebar = props => {
    const [extended, setExtended] = useState(true)
    function toggleWidth() {
        setExtended(prev => !prev)
    }

    return (
        <div className= {styles.sidebar} style={{width: extended ? 50 : 250 }} onClick = {toggleWidth}>
            <nav className= {styles.navbar}>
                <SidebarItem icons= {<AiFillHome/>} text="Нүүр" link="/home" />
                <SidebarItem icons= {<BsPersonPlusFill/>} text="Нэвтрэх" link="/login"/>
                <SidebarItem icons= {<MdAccountCircle/>} text="Бүртгүүлэх" link="/signup" />
                {/* onClick = {() => {
                    setLink(props.link)
                }} */}
            </nav> 
        </div> 
        )
}
export default Sidebar