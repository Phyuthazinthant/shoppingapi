import React, { useState } from 'react'
import Welcome from '../../../assets/images/welcome.png'
import './styles.css'
import 'semantic-ui-css/semantic.min.css'
import { Button, Form ,Icon} from 'semantic-ui-react'

function Signin() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const loginApi = () => {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Basic YWRtaW4yQHllc3NzLmNvbS5tbToyQzZwc1ZJZzV4OW44VGcxc0s4dTg4MWF0MDY0NzZ6MQ==");

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch(`http://www.yesss.com.mm/api.php/?_d=login&user_login=${email}&password=${password}`, requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));


    }

    return (
        <div>
            <div className="Sign" >
               
                <Form success>
                    <img height="100px" width="100px" src={Welcome} alt="welcome" class="mb-3"/>
                    <br />
                    <Form.Input placeholder='Email '  
                    onChange={(event) => setEmail(event.target.value)}/>
                    <br />
                    <Form.Input  placeholder='Password' type='password' 
                     onChange={(event) => setPassword(event.target.value)}/>
                   <br />
                    <Button onClick={loginApi} inverted color='orange'>
                        LOGIN
                    </Button>
                </Form>
            </div>
            <a class="float-right mt-3 text-primary">Register Here</a>


        </div>
    )
}

export default Signin
