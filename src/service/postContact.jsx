import { instance } from '../hooks/instance'

const postContact = (api, body) => {
    instance().post(api, body).then(res=>res)
}

export default postContact