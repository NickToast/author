import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const DisplayTable = (props) => {

    const deleteAuthor = (id) => {
        axios.delete(`http://localhost:8000/api/authors/${id}`)
            .then(res => {
                props.getAuthors()
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <h3>We have quotes by:</h3>
            <table className='table-style mt-3'>
                <thead>
                    <th className='table-style'>Authors</th>
                    <th>Actions</th>
                </thead>
                <tbody>
                    { props.authors.length > 0 ?
                        (
                            props.authors.map((author, key) => {
                                return <>
                                    <tr key={key}>
                                        <td className='table-style'>{author.name}</td>
                                        <td className='table-style'>
                                            <Link to={`/authors/${author._id}/edit`}><button className='authors-btn'>Edit</button></Link>
                                            <button className='delete-btn' onClick={(e) => {deleteAuthor(author._id)}}>Delete</button>
                                        </td>
                                    </tr>
                                </>
                            })
                        )
                        : <></>
                    }  
                </tbody>
            </table>
        </div>
    )
}

export default DisplayTable