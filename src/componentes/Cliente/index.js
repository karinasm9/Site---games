import './Cliente.css'

const Cliente = ({nome, email, foto, especialidade}) => {
    return (
        <div className="cliente">
            <div className="cabecalho">
                <img src={foto} alt='avatar'/>
            </div>
            <div className="rodape">
                <h4>{nome}</h4>
                <h5>{email}</h5>
                <h5>{especialidade}</h5>
            </div>
        </div>
    )
}
export default Cliente;