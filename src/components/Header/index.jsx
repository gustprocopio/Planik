// import { Menu } from "@styled-icons/heroicons-solid/Menu"

import styles from './styles.module.scss'

import whiteLogo from '../../assets/images/planik_white.jpeg'

export function Header() {
    return (
        <header className={styles.headerContainer}>
            <img 
                src={whiteLogo} 
                alt="logo" 
                height={80}
            />

            <p>
                {/* <span className='btn'>
                    <div className='btn__burger'/>
                </span> */}
                <span>MENU</span>
            </p>
        </header>
    )
}