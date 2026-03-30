import { useState } from 'react'
import './style.css'

function InfoCurso(){
    const [nome, setosNome] = useState ("Coletação de almas")
    const [cargaHoraria, setCargaHoraria] = useState (90)
    const [local, setLocal] = useState("encruzilhada")
    return(
        <div className='info-curso'>
        <h2>Dados do curso: </h2>
        <p>Nome: { nome }</p>
        <p> Carga Horária: { cargaHoraria}</p>
        <p>Local: { local }</p>
         </div>
    )
}

export default InfoCurso