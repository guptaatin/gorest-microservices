import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function UsersList() {
    let navigate = useNavigate();
    const [data, setData] = useState([])

    useEffect(() => {
        fetch("http://localhost:9001/users-micro/users-list")
            .then((res) => res.json())
            .then((data) => setData(data))
    }, [])

    return (
        <table className="table table-dark">
            <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Gender</th>
                    <th scope="col">Status</th>
                </tr>
            </thead>
            <tbody>
                {data.map(v => {
                    return (
                        <tr onClick={() => navigate(`/users/${v.id}`)}>
                            <th scope="row">{v.id}</th>
                            <td>{v.name}</td>
                            <td>{v.email}</td>
                            <td>{v.gender}</td>
                            <td>{v.status}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    );
}

export default UsersList;
