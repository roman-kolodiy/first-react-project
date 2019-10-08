import * as axios from "axios/index";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "572b4a44-8d1a-4534-8597-aa71a973bf60"
    }
});

export const usersAPI = {
    getUsers (page = 1, count = 10) {
        return instance.get(`users?page=${page}&count=${count}`)
            .then(response => response.data)
            .catch(err => console.log(err))
    }
};

export const followAPI = {
    unfollowUser (id) {
        return instance.delete(`follow/${id}`)
    },
    followUser (id) {
        return instance.post(`follow/${id}`, {})
    }
};

export const profileAPI = {
    getProfile (id) {
        return instance.get(`profile/${id}`)
    },
    getStatus (id) {
        return instance.get(`profile/status/${id}`)
    },
    updateStatus (status) {
        return instance.put(`profile/status`, {status: status})
    }
};

export const authAPI = {
    getAuth () {
        return instance.get(`auth/me`)
    }
};

