

export default function Home() {
  return (
    <>
    <div className="text-white flex justify-center items-center flex-col h-[44vh] gap-4">
      <div className="font-bold text-5xl flex gap-2 justify-center items-center">Buy Me a Chai<span> <img src="/tea.gif" width={85} alt=""/></span></div>
      <p>a crowd Funding platform for creators. get funded by your fans and followers</p>
      <div>
        <button type="button" className="text-white bg-linear-to-br from-purple-600 to-blue-500 hover:bg-linear-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start Here</button>
        <button type="button" className="text-white bg-linear-to-br from-purple-600 to-blue-500 hover:bg-linear-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Read More</button>
      </div>
    </div>
      <div className="bg-white h-1 opacity-10">
      </div>
      <div className="text-white container mx-auto pb-32 pt-14">
        <h2 className="text-3xl font-bold text-center mb-14">Your fans can buy you a chai</h2>
        <div className="flex gap-5 justify-around">
          <div className="item space-y-3 flex flex-col justify-center items-center">
            <img  className="bg-slate-400 text-black rounded-full" width={85} src="/man.gif"></img>
            <p className="font-bold">Your fans want to help</p>
            <p className="text-center">fans are available for you to help you</p>
          </div>
           <div className="item space-y-3 flex flex-col justify-center items-center">
            <img  className="bg-slate-400 text-black rounded-full" width={85} src="/group.gif"></img>
            <p className="font-bold">Your fans want to help</p>
            <p className="text-center">fans are available for you to help you</p>
          </div>
           <div className="item space-y-3 flex flex-col justify-center items-center">
            <img  className="bg-slate-400 text-black rounded-full" width={85} src="/coin.gif"></img>
            <p className="font-bold">Your fans want to help</p>
            <p className="text-center">fans are available for you to help you</p>
          </div>
        </div>
      </div>

      <div className="bg-white h-1 opacity-10"></div>

      <div className="text-white  container mx-auto pb-32 pt-14 flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold text-center mb-14">Learn more about us</h2>
       <iframe width="560" height="315" src="https://www.youtube.com/embed/pFsg18E31fg?si=gED25BJ0OoftZ3ax" title="YouTube video player"style={{ border: "none" }} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>
    </>
  );
}
