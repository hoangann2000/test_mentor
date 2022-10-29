import React, { Fragment } from 'react'
import { useFormik } from 'formik';
import { Provider } from 'react-redux'
// import { FontAwesomeIcon } from 'FontAwesomeIcon';
import * as Yup from "yup";
import "../SingUp/SingUp.scss"
// import { GP } from '../../Util/setting';
// import { useDispatch } from "react-redux";
import { NavLink } from 'react-router-dom';
import { singInAction, singUpAction } from '../../Redux/Action/UserAction';
import { useDispatch } from 'react-redux';


export default function SingIn() {
    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues: {
            passWord: '',
            email: '',
        },
        validationSchema: Yup.object({
            passWord: Yup.string().required("Mật khẩu không được để trống"),
            email: Yup.string().required("Email không để trống").email("Email không đúng format"),
        }),
        onSubmit: values => {
            console.log("data", values)
            dispatch(singInAction(values))
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
                                <label htmlFor="email">Email</label>
                                <input onChange={formik.handleChange}
                                    value={formik.values.email} type="email" className="form-control" id="email" name='email' placeholder="email" />
                                {formik.touched.email && formik.errors.email ? (
                                    <div className="text-danger">{formik.errors.email}</div>
                                ) : null}
                            </div>
                            <div className="form-group">
                                <label htmlFor="matKhau">password</label>
                                <input onChange={formik.handleChange}
                                    value={formik.values.passWord} type="password" className="form-control" id="matKhau" name='passWord' placeholder="password" />
                                {formik.touched.passWord && formik.errors.passWord ? (
                                    <div className="text-danger">{formik.errors.passWord}</div>
                                ) : null}
                            </div>
                            <div className='form__footer'>
                                <button type='submit' className='btn btn-success'>Login</button>
                                <p>Don't have an account yet? <NavLink to='/singup'>Register now</NavLink></p>
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
