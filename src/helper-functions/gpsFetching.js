import { NGROK_URL } from '@env'

export const getGPSData = async () => {
    await fetch(`${NGROK_URL}/api/get-gps`, {
        method: 'GET',
        headers: {
            "access-control-allow-origin": "*",
            'Accept': 'application/json',
            'Content-type': 'application/json'
        },
    }).then(res => {
        if (res.ok) {
            return res.json()
        } else {
            throw res.json()
        }
    }).then(json => {
        console.log("Good JSON")
        console.log(json)
    }).catch(error => {
        console.log("Bad JSON")
        console.log(error)
    })
}

export const postGPSData = (requestData) => {
    fetch(`${NGROK_URL}/api/post-gps`, {
        method: 'POST',
        headers: {
            "access-control-allow-origin": "*",
            'Accept': 'application/json',
            'Content-type': 'application/json'
        },
        body: requestData,
    })
}