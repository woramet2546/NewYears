// 'use client';

export default async function show({ params }){
    const id = await params.id;

    console.log(id)

    return(
        <p>Hello world = {id}</p>
    );
}