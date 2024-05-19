import React from 'react'
import './RankCurso.css'
import Medicina from '../../assets/medicina.png'
import Direito from '../../assets/direito.png'
import Administracao from '../../assets/adm.png'
import Economia from '../../assets/econo.png'
import MedVet from '../../assets/medivet.png'


const RankCurso = () => {

    return (
        <div class="container">
            <div class="caixa">
                <img src={Medicina} alt="logo medicina" />
                    <div class="info">
                        <div class="titulo">Medicina</div>
                    </div>
                    <div class="texto">
                        Nota de corte <br/><span class="quantidade">826,00</span>
                    </div>
            </div>

            <div class="caixa">
            <img src={Direito} alt="logo direito" />
                    <div class="info">
                        <div class="titulo">Direito</div>
                    </div>
                    <div class="texto">
                        Nota de corte <br/><span class="quantidade">744,24</span>
                    </div>
            </div>

            <div class="caixa">
            <img src={Administracao} alt="logo administracao" />
                    <div class="info">
                        <div class="titulo">Administração</div>
                    </div>
                    <div class="texto">
                        Nota de corte <br/><span class="quantidade">678,00</span>
                    </div>
            </div>

            <div class="caixa">
            <img src={Economia} alt="logo economia" />
                    <div class="info">
                        <div class="titulo">Economia</div>
                    </div>
                    <div class="texto">
                        Nota de corte <br/><span class="quantidade">672,00</span>
                    </div>
            </div>

            <div class="caixa">
            <img src={MedVet} alt="logo medvet" />
                    <div class="info">
                        <div class="titulo">Medicina Veterinária</div>
                    </div>
                    <div class="texto">
                        Nota de corte <br/><span class="quantidade">713,26</span>
                    </div>
            </div>
        </div>
    )
}

export default RankCurso

