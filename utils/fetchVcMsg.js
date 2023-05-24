import axios from "axios"

 export const fetchVcMsg = async () => {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_URL}/api/getVCmessage`)
    const vcMsg = await response.data
    return vcMsg
}

