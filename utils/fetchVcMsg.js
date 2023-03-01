
 export const fetchVcMsg = async () => {
    const data = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/getVCmessage`)
    const vcMsg = await data.json()
    return vcMsg
}

