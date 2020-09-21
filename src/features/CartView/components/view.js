import React from 'react'
import {Card} from 'reactstrap'
import Axios from 'axios'
export default class View extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: ''
        }
    }
    OnChangeIcon = (event) => {
        console.log('Icon loading....')
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Basic YWRtaW4yQHllc3NzLmNvbS5tbToyQzZwc1ZJZzV4OW44VGcxc0s4dTg4MWF0MDY0NzZ6MQ==");

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch("http://www.yesss.com.mm/api.php/?_d=carts/147", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
            console.log()
    }
    render() {
        
        return (
            <div>
                <i className="fa fa-shopping-cart" onClick={this.OnChangeIcon} style={{ float: "right", marginRight: 30 ,height: 50}}>Shopping card</i>
                <div className="container">
                    <div className="row">
                        
                            
                    </div>
                </div>
            </div>
        )
    }
}