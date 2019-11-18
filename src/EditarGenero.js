import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import { Redirect } from 'react-router-dom'

const EditarGenero = ({match}) => {
    const [name, setName] = useState('')
    const [success, setSuccess] = useState(false)

    useEffect(() => {
        Axios
            .get('/api/genres/'+ match.params.id)
            .then(res =>{
                setName(res.data.name)
            })
    }, [match.params.id])

    const onChange = evt =>{
        setName(evt.target.value)
    }

    const onSave = () => {
        Axios
            .put('/api/genres/' + match.params.id,{
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
            <h1>Editar genêro</h1>
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

export default EditarGenero