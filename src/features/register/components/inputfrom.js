import React from 'react'
import '../registerstyle.css'


import { Container, Row, Col, Card, CardBody, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Button } from 'reactstrap'
export default class InputForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Email: '',
            Password: '',
            User_type: 'C',
            Status: 'A',
            Company_id: '0',
            FirstName: '',
            LastName: '',
            Phone: '',


        }
        this.Email = this.ChangeEmail.bind(this)
        this.Password = this.ChangePassword.bind(this)
        this.User_type = this.ChangeUser_type.bind(this)
        this.Status = this.ChangeStatus.bind(this)
        this.Company_id = this.ChangeCompany_id.bind(this)
        this.FirstName = this.ChangeFirstName.bind(this)
        this.LastName = this.ChangeLastName.bind(this)
        this.Phone = this.ChangePhone.bind(this)
        this.register = this.register.bind(this)

        // this.handleSubmit=this.handleSubmit.bind(this);
    }
    ChangeEmail = (event) => {
        this.setState({ Email: event.target.value })
    }
    ChangePassword = (event) => {
        this.setState({ Password: event.target.value })
    }
    ChangeUser_type = (event) => {
        this.setState({ User_type: event.target.value })
    }
    ChangeStatus = (event) => {
        this.setState({ Status: event.target.value })
    }
    ChangeCompany_id = (event) => {
        this.setState({ Company_id: event.target.value })
    }
    ChangeFirstName = (event) => {
        this.setState({ FirstName: event.target.value })
    }
    ChangeLastName = (event) => {
        this.setState({ LastName: event.target.value })
    }
    ChangePhone = (event) => {
        this.setState({ Phone: event.target.value })
    }

    register = (event) => {
        const Email=this.state.Email;
        const Password=this.state.Password;
        const User_type=this.state.User_type;
        const Status=this.state.Status;
        const Company_id=this.state.Company_id;
        const FirstName=this.state.FirstName;
        const LastName=this.state.LastName;
        const Phone=this.state.Phone;
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Basic YWRtaW4yQHllc3NzLmNvbS5tbToyQzZwc1ZJZzV4OW44VGcxc0s4dTg4MWF0MDY0NzZ6MQ==");
        myHeaders.append("Content-Type", "application/json");
        console.log("MyHeaders" , myHeaders);
        var raw = JSON.stringify({ "email": {Email}, "password": {Password}, "user_type": {User_type}, "status": {Status}, "company_id": {Company_id}, "firstname": {FirstName}, "lastname": {LastName}, "phone": {Phone} });
        console.log("Raw" ,raw)
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://www.yesss.com.mm/api.php/?_d=users", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }
    getInitialState() {
        return {
            Email: 'Email',
            Password: 'Password',
            User_type: 'C',
            Status: 'A',
            Company_id: '0',
            FirstName: 'First Name',
            LastName: 'Last Name',
            Phone: 'Phone'

        }
    }

    render() {
        return (

            <div className="app flex-row align-items-center">
                <Container className="form-container">
                    <Row className="justify-content-center">
                        <Col md="9" lg="7" xl="6">
                            <Card className="mx-4">
                                <CardBody className="formlist p-4">
                                    <Form >
                                        <div className=" row mb-2 pageheading">
                                            <div className="col-sm-12 btn " style={{ fontSize: 30, fontWeight: "bold" }}>Register</div>
                                        </div>
                                        <InputGroup className="mb-3">
                                            <Input type="text" placeholder="Email" onChange={this.ChangeEmail} value={this.state.Email} required></Input>
                                        </InputGroup>
                                        <InputGroup className="mb-3">
                                            <Input type="password" placeholder="Password" onChange={this.ChangePassword} value={this.state.Password} required></Input>
                                        </InputGroup>
                                        <InputGroup className="mb-3">
                                            <Input type="text" placeholder="User_type" onChange={this.ChangeUser_type} value={this.state.User_type} ></Input>
                                        </InputGroup>
                                        <InputGroup className="mb-3">
                                            <Input type="text" placeholder="Status" onChange={this.ChangeStatus} value={this.state.Status} ></Input>
                                        </InputGroup>
                                        <InputGroup className="mb-3">
                                            <Input type="text" placeholder="Company_id" onChange={this.ChangeCompany_id} value={this.state.Company_id} required></Input>
                                        </InputGroup>
                                        <InputGroup className="mb-3">
                                            <Input type="text" placeholder="FirstName" onChange={this.ChangeFirstName} value={this.state.FirstName} required></Input>
                                        </InputGroup>
                                        <InputGroup className="mb-3">
                                            <Input type="text" placeholder="LastName" onChange={this.ChangeLastName} value={this.state.LastName} required></Input>
                                        </InputGroup>
                                        <InputGroup className="mb-3">
                                            <Input type="number" placeholder="Phone" onChange={this.ChangePhone} value={this.state.Phone} required></Input>
                                        </InputGroup>
                                        <Button color="success" onClick={this.register} OnClick={this.getInitialState}>Register</Button>
                                        <p>{this.state.message}</p>
                                    </Form>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>

            </div>

        )
    }
}