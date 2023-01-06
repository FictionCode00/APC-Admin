import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Controller, useForm } from "react-hook-form";
import { BsPencilFill } from "react-icons/bs"
import PhoneInput from "react-phone-number-input";
import { isValidPhoneNumber } from "react-phone-number-input";
import 'react-phone-number-input/style.css';
import { useNavigate } from "react-router-dom";
import uploadImage from '../../assets/images/UploadImg.jpg'
import { createUser, uploadImages } from "../../services/CommonServices";

const AddUser = () => {
    let navigate = useNavigate()
    const [imgUrl, setImgUrl] = useState('')
    const { register, handleSubmit, formState: { errors }, control, setValue, watch } = useForm()
    const onSubmit = (data) => {
        console.log(data);
        if (data.userImage) {
            let imgPayload = new FormData()
            imgPayload.append("file", data.userImage)
            uploadImages(imgPayload).then(response => {
                if (response.status === 200) {
                    let payload = {
                        "fullname": data.name,
                        // "lastname": data.lastName,
                        "email": data.email,
                        "password": data.password,
                        'user_img': response.data.data,
                        "phone_number": data.phoneNumber,
                        "security_pin": data.securityPin,
                        // 'referred_by': userId

                    }
                    // if (userId !== '') {
                    //     payload['referred_by'] = userId
                    // }
                    createUser(payload).then(response => {
                        if (response.status === 200) {
                            // toast.success(`${response.data.data.data.fullname} your account is created successfully.`)
                            navigate('/dashboard', { state: { "name": response.data.data.data.fullname } })
                            console.log('user created 12')
                        }
                    }).catch(err => {
                        // toast.error(err.response.data.message)
                    })
                }

            })
        }
        else {
            let payload = {
                "fullname": data.name,
                // "lastname": data.lastName,
                "email": data.email,
                "password": data.password,
                // 'user_img': response.data.data,
                "phone_number": data.phoneNumber,
                "security_pin": data.securityPin,
                // 'referred_by': userId

            }
            // if (userId !== '') {
            //     payload['referred_by'] = userId
            // }
            createUser(payload).then(response => {
                if (response.status === 200) {
                    // toast.success(`${response.data.data.data.fullname} your account is created successfully.`)
                    navigate('/dashboard', { state: { "name": response.data.data.data.fullname } })
                    console.log('user created 11')
                }
            }).catch(err => {
                // toast.error(err.response.data.message)
            })
        }
    }
    return (
        <>
            <div class="content_area">
                <section className='scn-1 bg-white p-3 rounded-2'>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <h4 className='light-blck heading mb-0'>Add User</h4>
                    </div>
                    <Row className="justify-content-center">
                        <Col md={10}>
                            <Form className='' onSubmit={handleSubmit(onSubmit)} >
                                <Row className='justify-content-center tab1_prnt mb-4'>
                                    <Col md={3} className='text-center'>
                                        <Controller
                                            control={control}
                                            name="userImage"
                                            // rules={{ required: "Image is required." }}
                                            render={({
                                                field: { onChange },

                                            }) => (<>

                                                <div className='rounded-2 img_prnt overflow-hidden'>
                                                    <img className='w-100' src={imgUrl || uploadImage} />
                                                    <input type="file" id="selectedFile" onChange={(e) => { onChange(e.target.files[0]); setImgUrl(URL.createObjectURL(e.target.files[0])) }} />
                                                </div>
                                                {errors.userImage && <p className="error-msg">{errors.userImage.message}</p>}</>
                                            )} />
                                    </Col>
                                </Row>

                                <Row>
                                    <Col md={6}>
                                        <Form.Group className="mb-3">
                                            <Form.Label className='mb-0 txt-label'>Full Name</Form.Label>
                                            <Form.Control className="rounded-2" type="text"  {...register("name", { required: "Full name is required." })} />
                                            {errors.name && <p className="error-msg">{errors.name.message}</p>}
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group className="mb-3">
                                            <Form.Label className='mb-0 txt-label'>Email</Form.Label>
                                            <Form.Control className="rounded-2" type="email"  {...register("email", { required: "Email is required.", pattern: { value: /^[a-z0-9._%+-]+@[a-z0-9]+\.[a-z]{2,10}(\.[a-z]{2,10})?(\.[a-z]{2,10})?(\.[a-z]{2,10})?(\.[a-z]{2,10})?$/, message: "Please enter valid email." }, setValueAs: e => e.toLowerCase() })} />
                                            {errors.email && <p className="error-msg">{errors.email.message}</p>}
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group className="mb-3">
                                            <Form.Label className='mb-0 txt-label'>Password</Form.Label>
                                            <Form.Control className="rounded-2" type="password"  {...register("password", { required: "Password is required." })} />
                                            {errors.password && <p className="error-msg">{errors.password.message}</p>}
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group className="mb-3">
                                            <Form.Label className='mb-0 txt-label'>Confirm Password</Form.Label>
                                            <Form.Control className="rounded-2" type="password"  {...register("confirmPassword", { required: "Confirm Password is required.", validate: value => value === watch('password') || "Password didn't match." })} />
                                            {errors.confirmPassword && <p className="error-msg">{errors.confirmPassword.message}</p>}
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group className="mb-3">
                                            <Form.Label className='mb-0 txt-label'>Phone Number</Form.Label>
                                            <Controller
                                                control={control}
                                                name="phoneNumber"
                                                rules={{ required: "Phone number is required.", validate: val => isValidPhoneNumber(val) || "Phone number is not valid" }}
                                                render={({
                                                    field: { onChange, value },

                                                }) => (
                                                    <PhoneInput
                                                        defaultCountry='IN'
                                                        value={value}
                                                        limitMaxLength={true}
                                                        onChange={onChange} />
                                                )} />
                                            {errors.phoneNumber && <p className='error-msg'>{errors.phoneNumber.message}</p>}
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group className="mb-3">
                                            <Form.Label className='mb-0 txt-label'>Security Pin</Form.Label>
                                            <Form.Control className="rounded-2" type="text" maxLength={4} minLength={4} {...register("securityPin", { required: "Security Pin is required." })} />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row className='justify-content-center mt-5 mt-sm-4 mb-3'>
                                    <Col md={3}>
                                        <Button type="submit" className='w-100 submit_bttn admn-sbmt-bttn'>
                                            Submit
                                        </Button>
                                    </Col>
                                </Row>
                            </Form>
                        </Col>
                    </Row>
                </section>
            </div>
        </>
    )
}
export default AddUser;