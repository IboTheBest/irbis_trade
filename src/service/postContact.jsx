import { instance } from '../hooks/instance'

const postContact = (api, body, toast) => {
    instance().post(api, body).then(res => {
        toast.success("Ваше сообщение успешно отправлено")
    })
}

export default postContact