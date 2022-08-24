import axios from "axios";

export const mailSender = (mail,name)=>{
    return axios.post("/auth/mail", {email: mail, name})
}

export const getArticles = ()=>{
    return axios.get("http://jsonmock.hackerrank.com/api/articles?page=1");
}

