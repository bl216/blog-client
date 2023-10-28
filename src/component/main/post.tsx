import { Button, Checkbox, Dialog, DialogContent, DialogTitle, FormControlLabel, IconButton, Paper, Radio, RadioGroup, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, TextField } from "@mui/material";
import { connect, useDispatch, useSelector } from "react-redux";
import ReactQuill from "react-quill";

const Company = (props: any) => {
    const modules = {
        toolbar: {
            container: [
                ["image"],
                [{ header: [1, 2, 3, 4, 5, false] }],
                ["bold", "underline"],
            ],
        },
    };
    const columns = [
        {id: 'id', name: 'Id'},
        {id: 'name', name: 'Name'},
        {id: 'email', name: 'Email'},
        {id: 'phone', name: 'Phone'},
        {id: 'address', name: 'Address'},
        {id: 'type', name: 'Company Type'},
        {id: 'action', name: 'Action'}
    ]

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

        const student = {"id": "111", "name": "bbb"}
        fetch("http://localhost:8080/student/add", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(student)
        }).then(() => {
            console.log("New Student added")
        })

    }

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
