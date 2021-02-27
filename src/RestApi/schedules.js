
const API = "http://localhost:3000/";


export const GetSchedule = async() => {
    const data = await fetch(`${API}schedules`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    return data.json()
}