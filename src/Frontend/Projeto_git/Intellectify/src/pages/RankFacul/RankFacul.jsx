import React from 'react'
import './RankFacul.css'
import Usp from '../../assets/usp.png'
import Unicamp from '../../assets/unicamp.png'
import Unifesp from '../../assets/unifesp.png'
import Ufabc from '../../assets/ufabc.png'
import Ifsp from '../../assets/ifsp.png'
import NavBar from '../../components/NavBar/NavBar'


const RankFacul = () => {

    return (

        <div class="container">
        
            
            <div class="caixa">
                
                <img src={Usp} alt="logo usp" />
                    <div class="info">
                    <div class="titulo">USP - Universidade de São Paulo</div>
        </div>
        <div class="texto">
            Quantidade de cursos <br/><span class="quantidade">184 cursos</span>
        </div>
            </div>

            <div class="caixa">
            <img src={Unicamp} alt="logo unicamp" />
                    <div class="info">
                    <div class="titulo">UNICAMP - Universidade Estadual de Campinas</div>
        </div>
        <div class="texto">
            Quantidade de cursos <br/><span class="quantidade">66 cursos</span>
        </div>
            </div>

            <div class="caixa">
            <img src={Unifesp} alt="logo unifesp" />
                    <div class="info">
                    <div class="titulo">UNIFESP - Universidade Federal de São Paulo</div>
        </div>
        <div class="texto">
            Quantidade de cursos <br/><span class="quantidade">57 cursos</span>
        </div>
            </div>

            <div class="caixa">
            <img src={Ufabc} alt="logo ufabc" />
                    <div class="info">
                    <div class="titulo">UFABC - Universidade Federal do ABC</div>
        </div>
        <div class="texto">
            Quantidade de cursos <br/><span class="quantidade">25 cursos</span>
        </div>
            </div>

            <div class="caixa">
            <img src={Ifsp} alt="logo ifsp" />
                    <div class="info">
                    <div class="titulo">IFSP - Instituto Federal de São Paulo</div>
        </div>
        <div class="texto">
            Quantidade de cursos <br/><span class="quantidade">137 cursos</span>
        </div>
    </div>
        
        </div>
    )
}

export default RankFacul

