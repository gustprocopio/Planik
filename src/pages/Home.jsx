import { Header } from '../components/Header/index'

import '../styles/login.scss'

import pinkImg from '../assets/images/login_girl_img.jpeg'


export function Home() {
    return (
        <>
            <Header />

            <div id="login">
                <aside>
                    <img 
                        src={pinkImg} 
                        alt="Ilustração"
                    />
                    
                </aside>
                <main>
                    <div>
                        <strong>Meu Portal Planik.</strong>
                        <p>
                            Um espaço pensado exclusivo para
                            <br/>
                            você, Cliente!
                        </p>
                        <input placeholder="Login" type="text"/>
                        <br/>
                        <input placeholder="Senha" type="password"/>
                        <a href="./">Esqueci minha senha</a>
                        <br/>
                        <button>Login</button>
                    </div>
                </main>
            </div>
        </>
        
    )
}