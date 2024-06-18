import React, { useEffect, useState } from 'react';
import './App.css';

function User() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                const data = await response.json();
                setUsers(data);
            } catch (error) {
                console.error('Error fetching the users data:', error);
            }
        };
       fetchUsers();
    }, []);

    return (
        <div className="App">
            <div className="profile-container">
                {users.map(user => (
                    <div key={user.id} className="profile-card">
                        <img
                            src={`https://avatars.dicebear.com/v2/avataaars/${user.username}.svg?options[mood][]=happy`}
                            alt={`${user.username}'s avatar`}
                            className="avatar"
                        />
                        <div className="profile-card-content">
                            <h2>{user.name}</h2>
                            <p><strong>Email:</strong> {user.email}</p>
                            <p><strong>Phone:</strong> {user.phone}</p>
                            <p><strong>Address:</strong> {`${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`}</p>
                            <p><strong>Website:</strong> <a href={`http://${user.website}`} target="_blank" rel="noopener noreferrer">{user.website}</a></p>
                            <p><strong>Company:</strong> {user.company.name}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default User;
