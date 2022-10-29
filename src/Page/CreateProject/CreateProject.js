import { Form, useFormik } from 'formik';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import {
    Button,
    Cascader,
    DatePicker,

    Input,
    InputNumber,
    Radio,
    Select,
    Switch,
    TreeSelect,
} from 'antd';
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { convertFromHTML, convertToRaw, EditorState } from 'draft-js';
import { useRef } from 'react';
import { createProjectAction, getProjectCategoryAction } from '../../Redux/Action/ProjectAction';
import { ProjectSer } from '../../Services/ProjectServices';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import draftToMarkdown from 'draftjs-to-markdown';

export default function CreateProject() {
    const [componentSize, setComponentSize] = useState("default");
    const [imgSrc, setImgSrc] = useState("");
    const dispatch = useDispatch();
    let [categoryy, setCategoryy] = useState([]);

    const [editorState, setEditorState] = useState(EditorState.createEmpty());
    const editor = React.useRef(null);
    let focusEditor = (values) => {
        // ! values nhận được cần convert, sử dụng thư viện của draftjs -> html
        let text_convert = editorState && draftToMarkdown(convertToRaw(editorState.getCurrentContent(values)))
        let text_result = text_convert.slice(0, -1)
        console.log(text_result)
        formik.setFieldValue('description', text_result);
    }

    let { ArrCategory } = useSelector(state => state.ProjectReducer)
    useEffect(() => {
        dispatch(getProjectCategoryAction())
    }, [])


    const formik = useFormik({
        initialValues: {
            projectName: '',
            description: '',
            categoryId: 0,
            alias: ''
        },
        validationSchema: Yup.object({
            projectName: Yup.string().required("project name không được để trống"),
            alias: Yup.string().required("alias không được để trống")
        }),
        onSubmit: (values) => {
            console.log(values)
            dispatch(createProjectAction(values))
        },
    });

    const renderCategory = () => {
        return ArrCategory?.map((value, index) => {
            return <option>{value.projectCategoryName}</option>
        })
    }
    return (
        <div>
            <h1 className='text-center'>Create Project</h1>
            <form onSubmit={formik.handleSubmit} className='container'>
                <div className="form-group">
                    <label htmlFor="projectName">project name</label>
                    <input type="text" className="form-control" id="projectName" name="projectName"
                        onChange={formik.handleChange}
                        value={formik.values.projectName}
                    />
                    {formik.touched.projectName && formik.errors.projectName ? (
                        <div className="text-danger">{formik.errors.projectName}</div>
                    ) : null}
                </div>
                <div className="form-group">
                    <label htmlFor="alias">alias</label>
                    <input type="text" className="form-control" id="alias" name='alias'
                        onChange={formik.handleChange}
                        value={formik.values.alias}
                    />
                    {formik.touched.alias && formik.errors.alias ? (
                        <div className="text-danger">{formik.errors.alias}</div>
                    ) : null}
                </div>

                <div>
                    <label htmlFor="exampleInputEmail1">project category</label>
                    <select className="form-control" style={{ marginBottom: 30 }} id="exampleFormControlSelect1">
                        {renderCategory()}
                    </select>
                    <div style={{ border: "1px solid black", minHeight: "6em", cursor: "text" }}
                    >
                        <Editor
                            onChange={focusEditor}
                            ref={editor}
                            editorState={editorState}
                            toolbarClassName="toolbarClassName"
                            wrapperClassName="wrapperClassName"
                            editorClassName="editorClassName"
                            onEditorStateChange={setEditorState}
                        />
                    </div>
                </div>
                <div className='center d-flex justify-content-center my-3'>
                    <button type="submit" className="btn btn-primary p-2">Submit</button>
                </div>
            </form >
        </div >
    );
}
