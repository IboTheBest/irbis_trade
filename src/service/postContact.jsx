import { instance } from '../hooks/instance'

const postContact = (api, body, toast) => {
    instance().post(api, body)
        .then(() => {
            toast.success("Ваше сообщение успешно отправлено")
        })
        .catch(error => {
            toast.error("Ошибка при отправке сообщения")
            console.error(error)
        })
}
export default postContact