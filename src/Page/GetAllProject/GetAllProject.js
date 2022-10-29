import React from 'react'
import { useEffect } from 'react'
import { useDispatch } from "react-redux";
import { gettAllProjectAction } from '../../Redux/Action/ProjectAction'
import { Input, Button, Table } from "antd";
import { useState } from 'react';
import { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import {
    SearchOutlined,
    EditOutlined,
    DeleteOutlined,
    CalendarOutlined,
} from "@ant-design/icons";
import { AntDesignOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Divider, Tooltip } from 'antd';
import 'antd/dist/antd.css';
import histoty, { history } from '../../App'

export default function GetAllProject() {
    let [project, setProject] = useState([]);
    const { Search } = Input;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(gettAllProjectAction(setProject))
    }, [])

    const columns = [
        {
            title: "id",
            dataIndex: "id",
            sorter: (a, b) => a.id - b.id,
            sortDirections: ["descend", "ascend"],
            width: "15%",
        },

        {
            title: "Project name",
            dataIndex: "projectName",
            width: "15%",
            sorter: (a, b) => {
                let projectNameA = a.projectName.toLowerCase().trim();
                let projectNameB = b.projectName.toLowerCase().trim();
                if (projectNameA > projectNameB) {
                    return 1;
                }
                return -1;
            },
        },
        {
            title: "Category name",
            dataIndex: "categoryName",
            sorter: (a, b) => {
                let categoryNameA = a.categoryName.toLowerCase().trim();
                let categoryNameB = b.categoryName.toLowerCase().trim();
                if (categoryNameA > categoryNameB) {
                    return 1;
                }
                return -1;
            },
            sortDirections: ["descend", "ascend"],
            width: "25%",
        },
        {
            title: "Creator",
            dataIndex: "creator",
            render: (text, project) => {
                return (
                    <p>{project.creator.name}</p>
                );
            },
            sortDirections: ["descend", "ascend"],
            width: "25%",
        },
        {
            title: "Member",
            dataIndex: "member",
            render: (text, project) => {
                return project.members.map((item, index) => {
                    return <Fragment>
                        <img key={index} style={{ width: 30, height: 30, marginRight: -3, borderRadius: 100 }} src={item.avatar} alt="" />
                        {(index + 1) % 2 == 0 ? <br />
                            : null}
                    </Fragment>

                })
            },
            // render: () => {
            //     return <>
            //         <Avatar.Group
            //             maxCount={2}
            //             size="midium"
            //             maxStyle={{
            //                 color: '#f56a00',
            //                 backgroundColor: '#fde3cf',
            //             }}
            //         >
            //             <Avatar src='' />
            //             <Avatar
            //                 style={{
            //                     backgroundColor: '#f56a00',
            //                 }}
            //             >
            //                 K
            //             </Avatar>
            //             <Tooltip title="Ant User" placement="top">
            //                 <Avatar
            //                     style={{
            //                         backgroundColor: '#87d068',
            //                     }}
            //                     icon={<UserOutlined />}
            //                 />
            //             </Tooltip>
            //             <Avatar
            //                 style={{
            //                     backgroundColor: '#1890ff',
            //                 }}
            //                 icon={<AntDesignOutlined />}
            //             />
            //         </Avatar.Group>
            //     </>
            // },
            sortDirections: ["descend", "ascend"],
            width: "25%",
        },
        {
            title: "Action",
            dataIndex: "Action",
            render: () => {
                return <p className='mx-3'>...</p>
            },
            sortDirections: ["descend", "ascend"],
            width: "25%",
        },
    ];



    const onChange = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
    };

    // const onSearch = (value) => {
    //     let tenthuong = value.toLowerCase();
    //     let mangSp = [];
    //     project.map((item, index) => {
    //         let tenItemThuong = item.projectName.toLowerCase()
    //         if (tenItemThuong.indexOf(tenthuong) > -1) {
    //             let arr = mangSp.push(item)
    //             setProject(arr)
    //         }
    //     })
    //     // console.log(mangSp);
    //     // return mangSp
    // };
    const data = project;

    return (
        <div>
            <h3 className="text-center mb-3">Get All Project</h3>
            <Button
                className="mb-5" style={{ backgroundColor: 'blue', color: 'white' }}
                onClick={() => {
                    history.push('/createProject')
                }}
            >
                Thêm phim
            </Button>
            <Search
                className="mb-5"
                placeholder="input search text"
                enterButton={<SearchOutlined />}
                size="large"
            // onSearch={onSearch}
            ></Search>
            < Table className='container' columns={columns} dataSource={data} onChange={onChange} />
        </div >
    );
}
