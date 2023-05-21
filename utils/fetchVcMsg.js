import axios from "axios"

 export const fetchVcMsg = async () => {
    const data = await axios.get(`${process.env.NEXT_PUBLIC_URL}/api/getVCmessage`)
    const vcMsg = await data.json()
    return vcMsg
}

