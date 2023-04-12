import { useState } from 'react'
import Botao from '../Botao'
import CaixaTexto from '../CaixaTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario =(props) => {

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [foto, setFoto] = useState('')
    const [especialidade, setEspecialidade] = useState('')

    const aoSalvar = (evento) =>{
        evento.preventDefault()
        props.aoClienteCadastrado({
            nome,
            email,
            foto,
            especialidade
        })
        console.log('Enviando..', nome, email, foto, especialidade)
    }

    return(
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para o cadastro:</h2>
                <CaixaTexto 
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite seu nome"
                    valor={nome}
                    aoAlterado={(valor) => setNome(valor)}
                />
                <CaixaTexto
                    label="Email"
                    placeholder="Digite seu email"
                    valor={email}
                    aoAlterado={(valor) => setEmail(valor)}
                />
                <CaixaTexto
                    label="Foto"
                    placeholder="Envie uma foto sua"
                    valor={foto}
                    aoAlterado={(valor) => setFoto(valor)}
                />
                <ListaSuspensa 
                    label="especialidade"
                    itens={props.nomeItem}
                    valor={especialidade}
                    aoAlterado={(valor) => setEspecialidade(valor)}
                />
                <Botao>Enviar</Botao>
            </form>
        </section>
    )
}

export default Formulario;