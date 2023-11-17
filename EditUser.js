//This page is to edit the employee details

import { useState, useEffect } from 'react'; //useState used to add a state to a function component & useEffect used to perfrom side effects of the components created
import { FormGroup, FormControl, InputLabel, Input, Button, styled, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom'; //useNavigate lets us navigate to other pages &useParams lets us access parameters of the current route
import { editUser, getUsers } from '../service/Api';


const initialValue = {
    id: '',
    FirstName: '',
    LastName: '',
    Email: ''
}

const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% 0 0 25%;
    & > div {
        margin-top: 20px
`;


const EditUser = () => {
    const [user, setUser] = useState(initialValue);
    const { id, FirstName, LastName,Email} = user;
    const { Id } = useParams();
    
    let navigate = useNavigate();

    useEffect(() => {
        loadUserDetails();
    }, []);

    const loadUserDetails = async() => {
        const response = await getUsers(id);
        setUser(response.data);
    }

    const editUserDetails = async() => {
        const response = await editUser(id, user);
        navigate('/all');
    }

    const onValueChange = (e) => {
        console.log(e.target.value);
        setUser({...user, [e.target.name]: e.target.value})
    }

    return (
        <Container>
            <Typography variant="h4">Edit Employee Details</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">Employee Id</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='id' value={id} Id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">First Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='FirstName' value={FirstName} Id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Last Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='LastName' value={LastName} Id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Email</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='Email' value={Email} Id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <Button variant="contained" color="primary" onClick={() => editUserDetails()}>Edit Employee</Button>
            </FormControl>
        </Container>
    )
}

export default EditUser;



