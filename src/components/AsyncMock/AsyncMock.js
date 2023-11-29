//Este componente ya no es utilizado en la aplicación, puesto que se usa firebase,
//sin embargo ilustra la manera en que se usan las promesas.
const mockArray = [
    {
        id:1,
        name:'Tablet Raizen',
        img:'https://s1.eestatic.com/2022/06/03/omicrono/analisis-prueba-productos/677442516_224810343_1706x960.jpg',
        description:'20x15cm',
        price:550,
        stock:20,
        category:'tablet'
    },
    {
        id:2,
        name:'Smartphone Cubot',
        img:'https://btechnology.com.co/wp-content/uploads/2022/06/Cubot-X30-Verde-600x600.png',
        description: '10x8cm',
        price:300,
        stock:25,
        category:'smartphone'
    },
    {
        id:3,
        name:'Laptop Dizi',
        img:'https://www.pcworld.com/wp-content/uploads/2023/08/20220324_103646-1-7.jpg?resize=1024%2C768&quality=50&strip=all',
        description: '30x20cm',
        price:1000,
        stock:10,
        category:'laptop'
    }
];

export const mockFetch =()=>{
    return new Promise((resolve)=>{
        setTimeout(()=> {
            resolve(mockArray)
        }, 1000)
    })
}

export const mockFetchId =(id)=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(mockArray.find(produ=>id === produ.id))
        }, 1000)
    })
}

export const mockCategory = (category) =>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            let newMockArray = mockArray.filter(item=> category === item.category )
            console.log(newMockArray)
            resolve( newMockArray)
        },1000)
    })
}

