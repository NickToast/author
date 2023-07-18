import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const New = () => {

    const [formData, setFormData] = useState({name: ''})

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData(currentData => ({...currentData, [name]: value}))
    }

    const navigator = useNavigate()

    const [nameErr, setNameError] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/authors/new', formData)
            .then(res => {setFormData({
                name: ''
            })
            navigator('/')
        })
            .catch(err => {
                const errors = err.response.data.errors
                if (errors.name){
                    setNameError(errors.name.message)
                } else {
                    setNameError('')
                }
            })
    }

    return (
        <div>
            <Link to='/'><h4>Home</h4></Link>
            <h3>Add a new author:</h3>
            <form onSubmit={handleSubmit} className='box-border'>
                <p className='errStyle'>{nameErr}</p>
                <div className='form-style'>
                    <label>Name: </label>
                    <input type="text" name='name' onChange={handleChange} value={formData.name} placeholder='Author Name'/>
                </div>
                <Link to={'/'}><button className='authors-btn'>Cancel</button></Link>
                <button className='authors-btn'>Submit</button>
            </form>
        </div>
    )
}

export default New