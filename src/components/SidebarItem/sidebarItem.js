import styles from './sidebarItem.module.css'
import MenuIcons from '../icons/icons'
import {Link} from 'react-router-dom'


export const SidebarItem = (props) => {
    return(
        <div className={styles.itemContainer}>
            <Link to= {props.link}>
                <li className={styles.item} type="button"><MenuIcons icons={props.icons}/>
                    {props.text}
                </li>
            </Link>
        </div>
    )
}