import {useState } from "react"
import styles from './loginWindow.module.css'
import {Link} from 'react-router-dom'

export default function LoginWindow() {
    // const [form, setForm] = useState({
    //     email: '',
    //     password: ''
    // })

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function handleLogin() {
        console.log({
            email: email,
            password: password
        })
    }

    return (
        <div className={styles.loginContainer}>
            <div className={styles.login}>
                <form className={styles.loginForm}>
                    <h4>Тавтай морилно уу</h4>
                    <input value={email} placeholder = {"И-мэйл"} className = {styles.input} onChange={e => setEmail(e.target.value)} />
                    <input value={password} placeholder ={"Нууц үг"} className = {styles.input} onChange={e => setPassword(e.target.value)} />
                    <Link className={styles.topLink} to ="/home">
                       Нууц үгээ мартсан
                    </Link>
                    {/* <div>Нууц үгээ мартсан</div> */}
                    <button className = {styles.input} type="submit" onClick={handleLogin}>
                    Нэвтрэх
                    </button>
                    <Link className={styles.link} to ="/signup">
                        Бүртгэл үүсгээгүй бол энд дарж орно уу
                    </Link>
                    {/* <Link to =  className={styles.link}/>
                        <p >Бүртгэл үүсгээгүй бол энд дарж орно уу</p>
                    </Link> */}
                </form>
            </div>         
        </div>
    )
}