import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import DisplayTable from './DisplayTable'
import axios from 'axios'

const Dashboard = () => {

    const [authors, setAuthors] = useState([])

    const getAuthors = () => {
        axios.get('http://localhost:8000/api/authors')
            .then(res => setAuthors(res.data))
            .catch(err => console.log(err))
    }

    useEffect(getAuthors, [])

    return (
        <div>
            <Link to='/authors/new'><h4>Add an Author</h4></Link>
            <DisplayTable authors={authors} getAuthors={getAuthors}/>
        </div>
    )
}

export default Dashboard