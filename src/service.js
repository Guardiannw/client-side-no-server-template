// Remove when backend is integrated
import uuid from 'uuid/v4';

const latency = 1000; // in ms
/*
// All functions need to return promises
export function getUsers() {
    // Add latency for testing
    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const users = JSON.parse(localStorage.getItem('users'));

            resolve(users);
        }, latency);
    });
}

export function addUser(user) {
    // Add latency for testing
    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const users = JSON.parse(localStorage.getItem('users'));

            const newUser = {...user, id: uuid()};

            users.push(newUser);

            localStorage.setItem('users', JSON.stringify(users));

            resolve(newUser);
        }, latency);
    });
}

export function deleteUser(id) {
    // Add latency for testing
    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const users = JSON.parse(localStorage.getItem('users'));

            const newUsers = users.filter((user) => user.id !== id);

            localStorage.setItem('users', JSON.stringify(newUsers));

            resolve();
        }, latency);
    });
}
*/
export function getUsers() {
    return fetch('http://localhost:8080/').then((res) => res.json());
}

export function addUser(user) {
    return fetch('http://localhost:8080/', {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((res) => res.json());
}

export function deleteUser(id) {
    return fetch(`http://localhost:8080/${id}`, {
        method: 'DELETE'
    }).then((res) => res.json());
}