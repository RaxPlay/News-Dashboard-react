import { useEffect, useState } from 'react'
import '../styles/newsCompStyles.css'

const API_KEY= import.meta.env.VITE_API_KEY;

export const NewsComponent = () => {
  const [TopNew, setTopNew] = useState();
  const [TopNewImgURL, setTopNewImgURL] = useState();
  const [TopNewURL, setTopNewURL] = useState();
  const [TopNewDesc, setTopNewDesc] = useState();

  const [Top2New, setTop2New] = useState();
  const [Top2NewImgURL, setTop2NewImgURL] = useState();
  const [Top2NewURL, setTop2NewURL] = useState();
  const [Top2NewDesc, setTop2NewDesc] = useState();

  const [Top3New, setTop3New] = useState();
  const [Top3NewImgURL, setTop3NewImgURL] = useState();
  const [Top3NewURL, setTop3NewURL] = useState();
  const [Top3NewDesc, setTop3NewDesc] = useState();

  const [Top4New, setTop4New] = useState();
  const [Top4NewImgURL, setTop4NewImgURL] = useState();
  const [Top4NewURL, setTop4NewURL] = useState();
  const [Top4NewDesc, setTop4NewDesc] = useState();

  const [Top5New, setTop5New] = useState();
  const [Top5NewImgURL, setTop5NewImgURL] = useState();
  const [Top5NewURL, setTop5NewURL] = useState();
  const [Top5NewDesc, setTop5NewDesc] = useState();

  const fetchData = async() => {
    const request = await fetch(`https://newsapi.org/v2/everything?q=Tech&from=2025/11/17&sortBy=popularity&apiKey=${API_KEY}`);
    const data = await request.json();

    console.log(data)
    
    setTopNew(data.articles[0].title);
    setTopNewImgURL(data.articles[0].urlToImage)
    setTopNewURL(data.articles[0].url);
    setTopNewDesc(data.articles[0].description)

    setTop2New(data.articles[1].title);
    setTop2NewImgURL(data.articles[1].urlToImage)
    setTop2NewURL(data.articles[1].url);
    setTop2NewDesc(data.articles[1].description)

    setTop3New(data.articles[2].title);
    setTop3NewImgURL(data.articles[2].urlToImage)
    setTop3NewURL(data.articles[2].url);
    setTop3NewDesc(data.articles[2].description)

    setTop4New(data.articles[3].title);
    setTop4NewImgURL(data.articles[3].urlToImage)
    setTop4NewURL(data.articles[3].url);
    setTop4NewDesc(data.articles[3].description)

    setTop5New(data.articles[4].title);
    setTop5NewImgURL(data.articles[4].urlToImage)
    setTop5NewURL(data.articles[4].url);
    setTop5NewDesc(data.articles[4].description)
  }

  useEffect(()=>{
    fetchData();
  },[])

  return (
    <>
        <h1 className='bg-linear-to-b from-red-400 to-red-500'>Top 5 Tech News of Today</h1>
        <ul className='text-2xl justify-center mt-10'>
          <li>
            <div className='flex mb-15 bg-linear-to-br from-red-400 to-red-500 justify-center' id='top-new'>
              <a href={TopNewURL} target='_blank' className=''>
                <img src={TopNewImgURL} alt="Top-New" className='h-[200px] w-[400px]'/>
              </a>
              <div className='ml-5'>
                <h2 className='underline'>"{TopNew}"</h2>
                <p className='relative top-25'><span className='underline'>New Description</span>: "{TopNewDesc}"</p>
              </div>
            </div>
          </li>

          <li>
            <div className='flex mb-15 bg-linear-to-br from-red-400 to-red-500 justify-center' id='top-new'>
              <a href={Top2NewURL} target='_blank' className=''>
                <img src={Top2NewImgURL} alt="Top-New" className='h-[200px] w-[400px]'/>
              </a>
              <div className='ml-5'>
                <h2 className='underline'>"{Top2New}"</h2>
                <p className='relative top-25'><span className='underline'>New Description</span>: "{Top2NewDesc}"</p>
              </div>
            </div>
          </li>

          <li>
            <div className='flex mb-15 bg-linear-to-br from-red-400 to-red-500 justify-center' id='top-new'>
              <a href={Top3NewURL} target='_blank' className=''>
                <img src={Top3NewImgURL} alt="Top-New" className='h-[200px] w-[400px]'/>
              </a>
              <div className='ml-5'>
                <h2 className='underline'>"{Top3New}"</h2>
                <p className='relative top-25'><span className='underline'>New Description</span>: "{Top3NewDesc}"</p>
              </div>
            </div>
          </li>

          <li>
            <div className='flex mb-15 bg-linear-to-br from-red-400 to-red-500 justify-center' id='top-new'>
              <a href={Top4NewURL} target='_blank' className=''>
                <img src={Top4NewImgURL} alt="Top-New" className='h-[200px] w-[400px]'/>
              </a>
              <div className='ml-5'>
                <h2 className='underline'>"{Top4New}"</h2>
                <p className='relative top-25'><span className='underline'>New Description</span>: "{Top4NewDesc}"</p>
              </div>
            </div>
          </li>

          <li>
            <div className='flex bg-linear-to-br from-red-400 to-red-500 justify-center' id='top-new'>
              <a href={Top5NewURL} target='_blank' className=''>
                <img src={Top5NewImgURL} alt="Top-New" className='h-[200px] w-[400px]'/>
              </a>
              <div className='ml-5'>
                <h2 className='underline'>"{Top5New}"</h2>
                <p className='relative top-25'><span className='underline'>New Description</span>: "{Top5NewDesc}"</p>
              </div>
            </div>
          </li>
        </ul>
    </>
  )
}
