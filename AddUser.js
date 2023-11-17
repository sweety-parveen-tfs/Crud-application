//This page is to add employee

import  { useState } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, styled, Typography } from '@mui/material';
import { addUser } from '../service/Api';
import { useNavigate } from 'react-router-dom';


const initialValue = {
    id: '',
    FirstName: '',
    LastName:'',
    Email: ''
  
}

const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% 0 0 25%;
    & > div {
        margin-top: 20px;
`;

const AddUser = () => {
    const [user, setUser] = useState(initialValue);
    const { id, FirstName, LastName, Email} = user;
    let navigate = useNavigate();

    const onValueChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }

    const addUserDetails = async() => { //This function is to add employee
        await addUser(user);
        navigate('/all');
    }

    return (
        <Container>
            <Typography variant="h4">Add Employeer</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">Employee Id</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='id' value={id} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">First Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='FirstName' value={FirstName} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Last Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='LastName' value={LastName} id="my-input"/>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Email</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='Email' value={Email} id="my-input" />
            </FormControl>
            <FormControl>
                <Button variant="contained" color="primary" onClick={() => addUserDetails()}>Add</Button>
            </FormControl>
        </Container>
    )
}

export default AddUser;

