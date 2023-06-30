import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react'

export const productapi=createApi({
    reducerPath:"productapi",
    baseQuery:fetchBaseQuery({baseUrl:'https://fakestoreapi.com/'}),
    endpoints : (builder)=>({
        getAllProduct: builder.query({
            query: ()=>'products'
        }),
        getProductById: builder.query({
            query: (id)=>`products/${id}`
        }),
        getlimitProduct: builder.query({
            query: ()=>'/products?limit=4'
        })
    })
})

export const{useGetAllProductQuery, useGetProductByIdQuery, useGetlimitProductQuery}=productapi