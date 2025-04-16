import axios from 'axios'
import { instance } from '../hooks/instance'

const postContact = (api, body, toast, setLoading, setLoadingModal) => {
    setLoading(true);  // Open the loading modal

    axios.post(`https://irbis-trade.uz/api${api}`, body)
        .then(() => {
            setLoading(false);
            setLoadingModal(true)
        })
        .catch(error => {
            console.error(error);
            setLoading(false);
        });
}
export default postContact