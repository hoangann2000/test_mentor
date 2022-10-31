import React, { Fragment } from 'react'
import { useFormik } from 'formik';
import { Provider } from 'react-redux'
// import { FontAwesomeIcon } from 'FontAwesomeIcon';
import * as Yup from "yup";
import "./SingUp.scss"
// import { GP } from '../../Util/setting';
// import { useDispatch } from "react-redux";
import { NavLink } from 'react-router-dom';
import { singUpAction } from '../../Redux/Action/UserAction';
import { useDispatch } from 'react-redux';


export default function Register() {
    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues: {
            name: '',
            passWord: '',
            email: '',
            phoneNumber: '',
        },
        validationSchema: Yup.object({
            name: Yup.string().required("Tài khoản không được để trống").min(6, "Tối thiểu đủ 6 kí tự").max(20, "Tối đa 10 kí tự").matches(/^[A-Z a-z]+$/, "Tài khoản không được có kí tự đặc biệt"),
            passWord: Yup.string().required("Mật khẩu không được để trống"),
            email: Yup.string().required("Email không để trống").email("Email không đúng format"),
            phoneNumber: Yup.string().required("Số điện thoại không để trống"),

        }),
        onSubmit: values => {
            console.log("data", values)
            dispatch(singUpAction(values))
        },
    });
    return (
        <Fragment>
            <div className="Rigister">
                <div className='Rigister_content'>
                    <div className='a'>
                        <div className="right_top">
                            <h1>Register CyberBugs</h1>
                        </div>
                        <form onSubmit={formik.handleSubmit} className='form_rigister'>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input onChange={formik.handleChange}
                                    value={formik.values.name} type="text" className="form-control" id="name" name='name' placeholder="name" />
                                {formik.touched.name && formik.errors.name ? (
                                    <div className="text-danger">{formik.errors.name}</div>
                                ) : null}
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input onChange={formik.handleChange}
                                    value={formik.values.email} type="email" className="form-control" id="email" name='email' placeholder="email" />
                                {formik.touched.email && formik.errors.email ? (
                                    <div className="text-danger">{formik.errors.email}</div>
                                ) : null}
                            </div>
                            <div className="form-group">
                                <label htmlFor="phoneNumber">phone number</label>
                                <input onChange={formik.handleChange}
                                    value={formik.values.phoneNumber} type="text" className="form-control" id="phoneNumber" name='phoneNumber' placeholder="phone number" />
                                {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                                    <div className="text-danger">{formik.errors.phoneNumber}</div>
                                ) : null}
                            </div>
                            <div className="form-group">
                                <label htmlFor="passWord">password</label>
                                <input onChange={formik.handleChange}
                                    value={formik.values.passWord} type="password" className="form-control" id="passWord" name='passWord' placeholder="password" />
                                {formik.touched.passWord && formik.errors.passWord ? (
                                    <div className="text-danger">{formik.errors.passWord}</div>
                                ) : null}
                            </div>
                            <div className='form__footer'>
                                <button type='submit' className='btn btn-success'>Register</button>
                                <p>Alreadey have an account? <NavLink to='/singin'>Login now</NavLink></p>
                                <div className='footer_logo'>
                                    <i className="fab fa-facebook"></i>
                                    <i className="fab fa-twitter-square"></i>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
