import axios from "axios";
import swal from 'sweetalert';

import { URL, URL_ID } from './constants';

export const FindAll = (async entity => {
    return axios.get(URL)
        .then(res => {
            return res.data;
        }).catch(e => {
            console.log(e);
            return (
                swal("Error!", "Error al intentar traer datos", "error")
            );
        }
        );
});

export const byId = (async id => {
    return axios({
        method: 'GET',
        url: `${URL_ID}${id}`,
    })
        .then(res => {
            console.log("COnsulta", res.data);
            if(!res.data.data.length) {
                swal("Error!", "No hay datos para mostrar", "error")
                return res.data;
            } else {
                return res.data;
            }
        }).catch(e => {
            console.log(e);
            return (
                swal("Error!", "Error al intentar traer datos", "error")
            );
        }
        );
});
