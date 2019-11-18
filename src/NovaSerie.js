import React, { useState } from 'react'
import Axios from 'axios'
import {Redirect} from 'react-router-dom'

const NovaSerie = () => {
    const [name, setName] = useState('')
    const [success, setSuccess] = useState(false)
    const onChange = evt => {
        setName(evt.target.value)
    }

    const onSave = () => {
        Axios
        .post('/api/series', {
            name
        })
        .then(res=>{
            setSuccess(true)
        })
    }
    if(success){
        return <Redirect to='/series'/>
    }
    return (
        <div className='container'>
            <h1>Nova Série{name}</h1>
            <form>
                <div className='form-group'>
                    <label htmlFor='name'>Nome da série:</label>
                    <input type='text' value={name} onChange={onChange} className='form-control' id='name' placeholder='Nome da série' />
                </div>
            </form>
            <button className='btn btn-primary' type='button' onClick={onSave}>Salvar</button>
        </div>
    )
}

export default NovaSerie