import 'semantic-ui-css/semantic.min.css'
import React, { useState, useEffect } from 'react'
import { Button, Icon, Label, Card } from 'semantic-ui-react'

function P_detail() {
    const [pData, setPData] = useState('');
    const productApi = () => {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Basic YWRtaW4yQHllc3NzLmNvbS5tbToyQzZwc1ZJZzV4OW44VGcxc0s4dTg4MWF0MDY0NzZ6MQ==");

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch("http://www.yesss.com.mm/api.php/?_d=products", requestOptions)
            .then(response => response.json())
            .then(result => setPData(result))
            .catch(error => console.log('error', error));

    }
    useEffect(() => {
        productApi()
    }, [pData]);

    return (
        <div class="container">
            <div class="row">

                {pData && pData.products.map(item =>
            
                   <div key={item.product_id} class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                       
                        <Card >
                            <img src={item.main_pair.detailed.image_path} width="290" height="290"
                                alt="no photo" />

                            <Card.Content>Product Name={item.product}</Card.Content>
                            <Card.Content >Product Code ={item.product_code}</Card.Content>
                            <Card.Content >Weight={item.weight}</Card.Content>
                            <Card.Content >Height={item.height}</Card.Content>
                            <Card.Content>Price={item.price}</Card.Content>
                             <Button as='div' labelPosition='right'>
                                <Button  color='red'>
                                  
                                    Add To
                                    </Button>
                                 <Label as='a' basic color='red' pointing='left'>
                                    Card <Icon name='shop' />
                             </Label>
                            </Button>
                        </Card>
                    </div>
                   )}
            </div>
        </div>
    )
}

export default P_detail
