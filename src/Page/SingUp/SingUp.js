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
            taiKhoan: '',
            matKhau: '',
            email: '',
            soDt: '',
        },
        validationSchema: Yup.object({
            taiKhoan: Yup.string().required("Tài khoản không được để trống").min(6, "Tối thiểu đủ 6 kí tự").max(20, "Tối đa 10 kí tự").matches(/^[A-Z a-z]+$/, "Tài khoản không được có kí tự đặc biệt"),
            matKhau: Yup.string().required("Mật khẩu không được để trống"),
            email: Yup.string().required("Email không để trống").email("Email không đúng format"),
            soDt: Yup.string().required("Số điện thoại không để trống"),

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
                                <label htmlFor="taiKhoan">Name</label>
                                <input onChange={formik.handleChange}
                                    value={formik.values.taiKhoan} type="text" className="form-control" id="taiKhoan" name='taiKhoan' placeholder="name" />
                                {formik.touched.taiKhoan && formik.errors.taiKhoan ? (
                                    <div className="text-danger">{formik.errors.taiKhoan}</div>
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
                                <label htmlFor="soDt">phone number</label>
                                <input onChange={formik.handleChange}
                                    value={formik.values.soDt} type="text" className="form-control" id="soDt" name='soDt' placeholder="phone number" />
                                {formik.touched.soDt && formik.errors.soDt ? (
                                    <div className="text-danger">{formik.errors.soDt}</div>
                                ) : null}
                            </div>
                            <div className="form-group">
                                <label htmlFor="matKhau">password</label>
                                <input onChange={formik.handleChange}
                                    value={formik.values.matKhau} type="password" className="form-control" id="matKhau" name='matKhau' placeholder="password" />
                                {formik.touched.matKhau && formik.errors.matKhau ? (
                                    <div className="text-danger">{formik.errors.matKhau}</div>
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
