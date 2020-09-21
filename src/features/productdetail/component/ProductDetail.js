import React ,{useState,useEffect } from 'react'

function ProductDetail(){
    const [pid,setPid]=useState(265);
    const [post,setPost]=useState();
    const handleApi = () => {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Basic YWRtaW4yQHllc3NzLmNvbS5tbToyQzZwc1ZJZzV4OW44VGcxc0s4dTg4MWF0MDY0NzZ6MQ==");

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch(`http://www.yesss.com.mm/api.php/?_d=products/${pid}`, requestOptions)
            .then(response => response.json())
            .then(result => setPost(result))
            .catch(error => console.log('error', error));

    }
    useEffect(()=>{
handleApi()
    }, [pid,post])
    return (
        <div>
            <input type="text" value={pid} onChange={e=>setPid(e.target.value)}/>
            <p>{post.products.product_id}</p>
            {/* <button onClick={}>click me</button> */}
         
        </div>
    )
}

export default ProductDetail
