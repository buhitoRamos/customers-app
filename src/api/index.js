export const apiGet = (url)=> ()=> fetch(url).then(response => response.json());

export const apiPut = (url, id, obj) => ()=> 
fetch(`${url}/${id}`, {
    method: 'PUT',
    body: obj,
    header: new Headers({ 'Content-type': 'application/json' })
}).then(v => v.json())