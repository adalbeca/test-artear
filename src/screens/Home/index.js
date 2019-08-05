import React, { useEffect, useState } from 'react';
import './home.css';

import Cards from './components/Cards';
import CardInfo from './components/CardInfo';
import { FindAll } from '../../system/query';

const Home = () => {
    const [ data, setData ] = useState([]);

    useEffect(()=>{
        FindAll().then(data => setData(data.data));
    }, []);

    return(
        <div>
            <div className={'mb-2'}>Request API <b>reqres.in</b></div>
            <Cards data={data}/>
            <CardInfo data={data}/>
        </div>
    )
}
export default Home;
