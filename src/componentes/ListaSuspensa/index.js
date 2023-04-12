import './ListaSuspensa.css';

const ListaSuspensa =(props) => {
    return(
        <div className='lista-suspensa'>
            <label>Selecione o tipo de jogo: </label>
            <select 
                onChange={evento => props.aoAlterado (evento.target.value)} 
                value={props.valor}>
                {props.itens.map(item => {
                    return <option key={item}> {item} </option>
                })}
            </select>
        </div>
    )
}

export default ListaSuspensa;
