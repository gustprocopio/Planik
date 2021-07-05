import styles from './styles.module.scss'

import blackLogo from '../../assets/images/planik_black.png'

export function Sidebar() {
    return(
        <>  
            <div className="sidebarContainer">
                <img
                    src={blackLogo} 
                    alt="logo" 
                    width={95}
                    height={18}
                />

                <div>Posição Financeira</div>
                <div>2a via de boleto</div>
                <div>Extratos financeiros</div>
                <div>Fluxo de pagamento</div>
                <div>Informe de Rendimento</div>
                <div>Antecipação de parcelas</div>
                <div>Andamento de obra</div>
                <div>FAQ</div>
                <div>Comunicados</div>
            </div>
            
        </>
    )
}