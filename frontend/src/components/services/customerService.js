

import axios from "axios";

const API=axios.create({
    baseURL:"http://localhost:8080/api/v1/customers",
    headers:{
        "Content-Type":"application/json",
    },
});


export const getAllCustomer=()=>API.get("");

export const getCustomerByCode=(code)=>API.get(`/${code}`);

export const updateCustomer=(code,customer)=>API.put(`/${code}`,customer);

export const createCustomer=(customer)=>API.post("",customer);

export const deleteCustomer=(code)=>API.delete(`/${code}`);

export const searchCustomer=(keyword)=>API.get("/search",{params:{keyword}});