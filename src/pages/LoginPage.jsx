import React, {useState} from "react";
import { useDispatch } from "react-redux"
import authOperations from '../redux/auth/authOperations'
import Form from '../components/Form'
// import {useRegisterMutation} from '../redux/authApi';

const LoginPage = () => {
    // const [registration] = useRegisterMutation();
    const dispatch = useDispatch()
    // const [newUser, setNewUser] = useState({})
    // console.log(newUser)

    const handleLoginUser = async values => {
        try {
            await dispatch(authOperations.login(values))
          }
        catch (error) {
          console.log(error)
        }
  }

    // const handleSubmit = async (value) => {
    //     setNewUser(value)
    //     if(newUser) {
    //         await registration(newUser)
    //     }
    // }

    return (
        <>
            <Form onSubmit={handleLoginUser}/>
        </>
    )
}

export default LoginPage