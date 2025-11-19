export const HomeScreen = () => {
  return (
    <>
      <section className='page-title'>
        <h1 className="bg-linear-to-b from-red-400 to-red-500 ">News-Dashboard-Project</h1>
      </section>        

      <section className="description relative left-45 text-center w-[80%] mt-30 px-20 py-25 bg-linear-to-b from-blue-500 to-blue-300 rounded-2xl">
        <h2 className='text-3xl underline'>This project was created as practice and a part of my portfolio.</h2>
        <p className="text-xl">
          It contains a section to watch the newest tech news; and another part to create your own
          news. I hope you like it!! :)
        </p>
        <p className="mt-30 ">Click on <span className="underline">"Watch News"</span> or whatever you want I don't know</p>
      </section>

    </>
  )
}
