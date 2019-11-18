import React, { useState } from 'react'
import Axios from 'axios'
import {Redirect} from 'react-router-dom'

const NovoGenero = () => {
    const [name, setName] = useState('')
    const [success, setSuccess] = useState(false)
    const onChange = evt => {
        setName(evt.target.value)
    }

    const onSave = () => {
        Axios
        .post('/api/genres', {
            name
        })
        .then(res=>{
            setSuccess(true)
        })
    }
    if(success){
        return <Redirect to='/generos'/>
    }
    return (
        <div className='container'>
            <h1>Novo Genêro {name}</h1>
            <form>
                <div className='form-group'>
                    <label htmlFor='name'>Nome do genêro:</label>
                    <input type='text' value={name} onChange={onChange} className='form-control' id='name' placeholder='Nome do genêro' />
                </div>
            </form>
            <button className='btn btn-primary' type='button' onClick={onSave}>Salvar</button>
        </div>
    )
}

export default NovoGenero