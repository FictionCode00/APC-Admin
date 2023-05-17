import { Button, Container, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { login } from '../../services/CommonServices';
import React, { useContext } from 'react'
import appContext from "../../context/globalContext";
import { toast } from "react-toastify";

const Login = () => {
    const contextData = useContext(appContext)
    const { register, handleSubmit, formState: { errors } } = useForm()
    let navigate = useNavigate()
    const onSubmit = data => {
        console.log(data);
        login(data).then(response => {
            if (response.status === 200) {
                console.log("that is response",response)
                contextData.setToken(response.data.data.token)
                contextData.setId(response.data.data.id)
                localStorage.setItem('id', response.data.data.id)
                localStorage.setItem('token', response.data.data.token)
                toast.success(`you are logged in successfully.`)
                navigate('/dashboard')
            }
        }).catch(err => {
            console.log(err);
            toast.error(err.response.data.message)
        })
    }
    return (
        <>
            <Container className="glow-body">
                <div class="login_form_outer">
                    <div class="login_form">
                        <a href="#" className="logo_row mb-4">
                            <img alt="" className="img-fluid" src={require('../../assets/images/logo.png')} />
                        </a>
                        <h2 className="text-center">Sign In</h2>
                        <Form onSubmit={handleSubmit(onSubmit)}>
                            <Form.Group className="form-group" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="" {...register('email', { required: "Email is required.", pattern: { value: /^[a-z0-9._%+-]+@[a-z0-9]+\.[a-z]{2,10}(\.[a-z]{2,10})?(\.[a-z]{2,10})?(\.[a-z]{2,10})?(\.[a-z]{2,10})?$/, message: "Please enter valid email." }, setValueAs: e => e.toLowerCase() })} />
                                {errors.email && <Form.Text className="error-msg">{errors.email.message}</Form.Text>}
                            </Form.Group>

                            <Form.Group className="form-group" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="" minLength={6} {...register("password", { required: "Password is required." })}/>
                                {errors.email && <Form.Text className="error-msg">{errors.password.message}</Form.Text>}
                            </Form.Group>
                            <Button variant="primary" type="submit" className="blue_btn mb-4">
                                Sign In
                            </Button>
                        </Form>
                    </div>
                </div>
            </Container>




            {/* 
            <div class="container glow-body">
                <div class="login_form_outer">
                    <div class="login_form">
                        <a href="#" className="logo_row"><img alt="" /></a>
                        <h2 className="text-center">Sign In</h2>
                        <div class="form-group">
                            <label>Email</label>
                            <input type="text" placeholder="" class="form-control for_username" />
                        </div>
                        <div class="form-group">
                            <label>Password</label>
                            <input type="password" placeholder="" class="form-control" />
                        </div>
                        <a href="" class="blue_btn mb-4">Sign In</a>
                    </div>
                </div>
            </div> */}
        </>
    )
}

export default Login