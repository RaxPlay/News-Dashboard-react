import { useEffect } from 'react'

const API_KEY= import.meta.env.VITE_API_KEY;

export const NewsComponent = () => {
  const fetchData = async() => {
    const request = await fetch(`https://newsapi.org/v2/everything?q=Tech&from=2025/11/17&sortBy=popularity&apiKey=${API_KEY}`);
    const data = await request.json();

    console.log(data)
  }

  useEffect(()=>{
    fetchData();
  },[])

  return (
    <>
        <h1 className='bg-linear-to-b from-red-400 to-red-500'>Top 10 Tech News of Today</h1>
        <ul>
          <li></li>
        </ul>
    </>
  )
}
