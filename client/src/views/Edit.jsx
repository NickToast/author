import React, { useEffect, useState } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'
import axios from 'axios'

const Edit = (props) => {

    const {id} = useParams()
    const [author, setAuthor] = useState({})
    const [formData, setFormData] = useState({})
    const navigator = useNavigate()

    const getOneAuthor = () => {
        axios.get(`http://localhost:8000/api/authors/${id}`)
            .then(res => {
                setAuthor(res.data)
                setFormData(res.data)
            })
            .catch(err => console.log(err))
    }

    useEffect(getOneAuthor, [])

    const [nameErr, setNameError] = useState('')

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData(currentData => ({...currentData, [name]:value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:8000/api/authors/${id}`, formData)
            .then(res => {
                setFormData({
                    name: '',
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
            <h3>Edit this author:</h3>
            <form onSubmit={handleSubmit} className='box-border'>
                <p className='errStyle'>{nameErr}</p>
                <div className='form-style'>
                    <label>Name: </label>
                    <input type="text" name='name' onChange={handleChange} value={formData.name} placeholder={props.name}/>
                </div>
                <button className='authors-btn'><Link to='/' className='link-style'>Cancel</Link></button>
                <button className='authors-btn'>Submit</button>
            </form>
        </div>
    )
}

export default Edit