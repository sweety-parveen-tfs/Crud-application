//This is the page of all Api's 

import axios from 'axios';
const usersUrl = 'http://localhost:3002/users'; //This is the url to render json object


export const getUsers = async (id) => {  
    id = id || '';
    try {                                              //Get method is used to request data from a specified source
        return await axios.get(`${usersUrl}/${id}`);  //To handle errors we use try and catch
    } catch (error) {   
        console.log('Error while calling getUsers api ', error);
    }
}

export const addUser = async (user) => {
    return await axios.post(`${usersUrl}`, user);      //Post method is used to send data to a server to create
}

export const deleteUser = async (id) => {
    return await axios.delete(`${usersUrl}/${id}`);    //Delete method deletes the specified resource.
}

export const editUser = async (id, user) => {
    return await axios.put(`${usersUrl}/${id}`, user)  //Put method is used to send data to a server to create/update a resource.


}

