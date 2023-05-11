import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function ParticularUser() {
    const params = useParams()
    let navigate = useNavigate();
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        gender: '',
        status: ''
    })

    useEffect(() => {
        fetch(`http://localhost:9001/users-micro-particular/particular-user/${params.userId}`)
            .then((res) => res.json())
            .then((data) => setUserData({
                name: data.name,
                email: data.email,
                gender: data.gender,
                status: data.status
            }))
    }, [])

    const handleUpdate = () => {
        const data = {
            id: params.userId,
            name: userData.name,
            email: userData.email,
            gender: userData.gender,
            status: userData.status
        }
        fetch(`http://localhost:9001/users-micro-update/update-particular-user`, {
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
            method: "POST"
        })
            .then((res) => res.json())
            .then((data) => {
                setUserData(data)
                navigate(`/`)
            })
    }

    return (
        <div className="wrapper">
            <h4>Name: </h4><span><input value={userData.name} onChange={(e) => setUserData({ ...userData, name: e.target.value })} /></span>
            <h4>Email: </h4><span><input value={userData.email} onChange={(e) => setUserData({ ...userData, email: e.target.value })} /></span>
            <h4>Gender: </h4>
            <select value={userData.gender} onChange={(e) => setUserData({ ...userData, gender: e.target.value })}>
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select>
            <h4>Status: </h4>
            <select value={userData.status} onChange={(e) => setUserData({ ...userData, status: e.target.value })}>
                <option value="active">Active</option>
                <option value="inactive">InActive</option>
            </select>
            <button onClick={handleUpdate}>Update</button>
        </div>
    );
}

export default ParticularUser;
