import axios from 'axios';

const API_FILTERS_DATA_ENDPOINT = 'http://www.mocky.io/v2/5a25fade2e0000213aa90776'

const getApiFiltersData = async () =>{
    return await axios(API_FILTERS_DATA_ENDPOINT);
}

const Filters = {
    getApiFiltersData
};

export default Filters;