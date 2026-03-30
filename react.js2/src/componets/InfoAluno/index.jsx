import './style.css'

function InfoAluno(){
    const nome = "Andre Silva"
    const idade = 18
    const curso = "Coletação de almas"

    return (
        <div className='info-aluno'>
            <h2>Informações do aluno</h2>
            <p>Nome: {nome}</p>
            <p>Idade: {idade}</p>
            <p>Curso: {curso}</p>

        </div>
    )
}
export default InfoAluno