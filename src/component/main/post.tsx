import { Button, Checkbox, Dialog, DialogContent, DialogTitle, FormControlLabel, IconButton, Paper, Radio, RadioGroup, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, TextField } from "@mui/material";
import { connect, useDispatch, useSelector } from "react-redux";
import ReactQuill from "react-quill";
import { useState } from "react";
//import { createPost } from "./api/api";

const Company = (props: any) => {
    /* STAKBUCKS START */
    const modules = {
        toolbar: {
            container: [
                ["image"],
                [{ header: [1, 2, 3, 4, 5, false] }],
                ["bold", "underline"],
            ],
        },
    };
    const [content, setContent] = useState(""); // 스테이트 선언
    console.log(content);
    const [title, setTitle] = useState("");
    const handleTitleChange = (e: any) => {
        setTitle(e.currentTarget.value);
    };

    /*
    const handlesubmit = async () => {
        const date = new Date();
        try {
            await createPost({
                title: title,
                content,
                date,
            }).then((res: any) => console.log(res));
        } catch (error) {
            console.log(error);
        }
    };
    */

    /*
    const columns = [
        {id: 'id', name: 'Id'},
        {id: 'name', name: 'Name'},
        {id: 'email', name: 'Email'},
        {id: 'phone', name: 'Phone'},
        {id: 'address', name: 'Address'},
        {id: 'type', name: 'Company Type'},
        {id: 'action', name: 'Action'}
    ]
     */


    const handlesubmit = (e: any) => {
        e.preventDefault();
        /*
        const _obj = {id, name, email, phone, Address: address, type};
        if (isedit) {
            dispatch(UpdateCompany(_obj));
        } else {
            dispatch(CreateCompany(_obj));
        }
        */

        //const student = {"id": "111", "name": "bbb"}
        const student = {
            "id": "700",                        // bigint UN AI PK
            "post_author": "1",                 // bigint UN
            "post_date": new Date(),            // datetime
            "post_date_gmt": new Date(),        // datetime
            "post_content": content,            // longtext
            "post_title": title,                // text
            "post_excerpt": "",                 // text
            "post_status": "publish",           // varchar(20)
            "comment_status": "open",           // varchar(20)
            "ping_status": "open",              // varchar(20)
            "post_password": "",                // varchar(255)
            "post_name": "454-revision-v1",     // varchar(200)
            "to_ping": "",                      // text
            "pinged": "",                       // text
            "post_modified": new Date(),        // datetime
            "post_modified_gmt": new Date(),    // datetime
            "post_content_filtered": "",        // longtext
            "post_parent": "306",               // bigint UN
            "guid": "http://skiil.net/?p=700",  // varchar(255)
            "menu_order": "0",                  // int
            "post_type": "revision",            // varchar(20)
            "post_mime_type": "",               // varchar(100)
            "comment_count": "0",               // bigint
        }

        fetch("http://localhost:8080/student/add", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(student)
        }).then(() => {
            console.log("New Student added")
        })

    }

    return (
        <>
            <div>
                <label htmlFor="title">제목</label>
                <input id="title" type="text" onChange={handleTitleChange} />
                <ReactQuill
                    style={{ width: "800px", height: "600px" }}
                    modules={modules}
                    onChange={setContent}
                />
            </div>
            <button style={{ marginTop: "50px" }} onClick={handlesubmit}>
                제출
            </button>
        </>
    );

    /* STAKBUCKS END */





    /* 원래 잘 되던넘
    return (
                <div>
                            <form onSubmit={handlesubmit}>
                                <Stack spacing={2} margin={2}>
                                    <TextField variant="outlined" label="Name"></TextField>
                                    <TextField variant="outlined" label="Email"></TextField>
                                    <TextField variant="outlined" label="Phone"></TextField>
                                    <TextField multiline maxRows={2} minRows={2} variant="outlined" label="Address"></TextField>
                                    <ReactQuill
                                        style={{ width: "800px", height: "600px" }}
                                        modules={modules}
                                    />
                                    <RadioGroup>
                                        <FormControlLabel value="MNC" control={<Radio color="success"></Radio>} label="MNC"></FormControlLabel>
                                        <FormControlLabel value="DOMESTIC" control={<Radio></Radio>} label="DOMESTIC"></FormControlLabel>
                                    </RadioGroup>
                                    <FormControlLabel control={<Checkbox></Checkbox>} label="Agree Terms & Conditions"></FormControlLabel>
                                    <Button variant="contained" type="submit">Submit</Button>
                                </Stack>
                            </form>

</div>

);
    */

}

const mapStatetoProps = (state:any) => {
    return {
        companystate: state.company
    }
}

const mapDispatchtoProps = (dispatch:any) => {
    return {
        //loadcompany: () => dispatch(GetAllCompanys())
    }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(Company);
