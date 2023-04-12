import Cliente from '../Cliente';
import './Equipe.css';

const Equipe = (props) => {

    const cssFundo = { backgroundColor: props.corSecundaria }
    const cssTitulo = { borderColor: props.corPrimaria }

    return (
        (props.clientes.length > 0) ? <section className='equipe' style={cssFundo}>
            <h3 style={cssTitulo}>{props.nome}</h3>
            <div className='clientes'>
                {props.clientes.map(cliente => <Cliente
                    nome={cliente.nome}
                    email={cliente.email}
                    foto={cliente.foto}
                    especialidade={cliente.especialidade}
                />)}
            </div>
        </section>
        : ''
    )
}
export default Equipe;