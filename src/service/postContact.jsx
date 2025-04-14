import axios from 'axios'
import { instance } from '../hooks/instance'

const postContact = (api, body, toast) => {
    axios.post(`https://irbis-trade.uz/api${api}`, body)
        .then(() => {
            toast.success("Ваше сообщение успешно отправлено")
        })
        .catch(error => {
            toast.error("Ошибка при отправке сообщения")
            console.error(error)
        })
}
export default postContact