import React, { useEffect, useState } from 'react';
import { Button, FormControl } from 'react-bootstrap';
import './test2.css';

import Cards from './components/Cards';
import { byId } from '../../system/query';

const Home = () => {
    const [ searchId, setSearchId ] = useState(1);
    const [ data, setData ] = useState([]);

    useEffect(()=>{
        byId(searchId).then(data => setData(data.data));
    }, []);

    const search = () => {
        byId(searchId).then(data => setData(data.data));
    };

    return(
        <div>
            <div className={'mb-2'}>
                <div>Consultar Paginas</div>
                <div className={'d-flex'}>
                    <FormControl type={'number'} style={{ width:100 }} className={'mr-2'} onChange={(e)=>setSearchId(e.target.value)} />
                    <Button onClick={search}> Consultar </Button>
                </div>
            </div>

            <Cards data={data}/>

        </div>
    )
}
export default Home;
