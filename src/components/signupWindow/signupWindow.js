import { useState } from "react"
import styles from './signupWindow.module.css'
import {Link} from 'react-router-dom'

export default function SignupWindow() {
    const [text, setText] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState ('')

    function handleSignup() {
        console.log ({
            name: text,
            email: email,
            password: password
        })
    }
    return(
        <div className = {styles.signupContainer}>
            <div className = {styles.signup}>
                <form action="" className={styles.signupForm}>
                    <h4 >Шинэ хэрэглэгч бүртгүүлэх</h4>
                    <input type= "text" value = {text} placeholder = {"Нэр"} className = {styles.input} onChange = {e => setText(e.target.value)}/>
                    <input value = {email} placeholder = {"И-мэйл"} className = {styles.input} onChange = {e => setEmail(e.target.value)}/>
                    <input value = {password} placeholder = {"Нууц үг"} className = {styles.input} onChange = {e=> setPassword(e.target.value)}/>
                    <input value = {password} placeholder = {"Нууц үгээ дахин оруулна уу"} className = {styles.input} onChange = {e=> setPassword(e.target.value)}/>
                    <button className = {styles.input} type="submit" onClick = {handleSignup}> Нэвтрэх</button>
                    <Link className={styles.link} to ="/login">
                        <p >Бүртгэлтэй хэрэглэгч бол энд дарж нэвтэрнэ үү </p>
                    </Link>
                        
                </form>
            </div>
        </div>
    )
}