import axios from "axios";

// const userToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoieEpWMW1US2d6d3VpN0JIVE1lcGEiLCJsYXN0TmFtZSI6IkRpYXMiLCJmaXJzdE5hbWUiOiJEaWFzIiwiZW1haWwiOiJhci5kaWFzQGVjb2xlLWlwc3NpLm5ldCIsImlzQWRtaW4iOnRydWV9LCJpYXQiOjE2OTkyMDk3NDV9.k1My1EGZQ9ZAjlRw55KO6vKN6y7s8Iyx6ZV4611Fx20"

export const request = async (url: string, type: string| undefined, data: any) => {
    try {
        const token = localStorage.getItem("token");

        if(!token) throw new Error("No connected")

        const conf = {
            method: type || "get",
            url: `http://localhost:3001/${url}`,
            // data,
            headers: {
                
                'Authorization': `Bearer ${token}`
            }
        }
        const result = await axios(conf)

        if (!result.data) throw new Error("Request not pass")

        return result.data
    } catch
        (e: any) {
        console.error(e.message)
    }
}