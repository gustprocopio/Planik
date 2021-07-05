import { Sidebar } from "../components/Sidebar";

import '../styles/clientportal.scss'

import profileImg from '../assets/images/profile.png'
import financialPosImg from '../assets/images/financial_position.jpeg'
import andamentoObra from '../assets/images/progress_bar.png'

export function PortalCliente() {
    return (
        <>
            <Sidebar/>
            <div>
                <header>
                    <span>Portal do Cliente</span>
                    <span>Gustavo Procópio</span>
                    <img 
                        src={profileImg}
                        alt="foto de perfil"
                        height={80}
                        width={80}
                    />
                </header>
                
                <main>
                    <h1>Bem vindo, <span>Gustavo Procópio :)</span></h1>
                </main>

                <p>Overview</p>

                <div class="Container">
                
                    <div class="Posição-Financeira">
                        <title>Posição Financeira</title>
                        <img 
                            src={financialPosImg}
                            alt="posição financeira"
                            height={250}
                            width={360}
                        />
                        <h2>Ver mais detalhes</h2>
                    </div>

                    <div class="Ultimos-Comunicados">
                        <title>Últimos comunicados</title>
                        <p>Lorem ipsum dolor sit met...</p>
                        <p>Lorem ipsum dolor sit met...</p>
                        <p>Lorem ipsum dolor sit met...</p>
                        <p>Lorem ipsum dolor sit met...</p>
                        <h2>Ver mais comunicados</h2>
                    </div>

                    <div class="Andamento-da-Obra">
                        <title>Últimos comunicados</title>
                        <h2>Ver mais detalhes</h2>
                        <img 
                            src={andamentoObra}
                            alt="barra de progresso"
                            height={50}
                            width={450}
                        />
                    </div>
                    <div class="Meu-imóvel">
                        <title>Meu imóvel</title>
                        <strong>NIK ESTAÇÃO VILA MARIANA</strong>
                        <p>Torre: 1 torre</p>
                        <p>Unidade: 34</p>
                        <p>Andar: 2 andar</p>
                        <p>Quantidade de andares: 15</p>
                        <p>Lorem ipson: xxxxx</p>
                        <p>Lorem ipson: xxxxx</p>
                        <p>Lorem ipson: xxxxx</p>   
                        <p>Lorem ipson: xxxxx</p>
                        <h2>Ver mais detalhes</h2>
                    </div>
                </div>

                    
                
                
            </div>
            
        </>
    )
}