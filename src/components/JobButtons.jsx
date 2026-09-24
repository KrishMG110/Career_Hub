const JobButtons = (props) => {
  return (
    <div id='JobButtons' className='flex overflow-x-auto gap-10 my-5'>
        {props.jobsData.map((e)=>{
            return(
             <div className="my-5 ">
            <button className="  text-xs text-black  bg-gray-300 px-2 py-2 rounded text whitespace-nowrap hover:bg-blue-400 transition-all duration-150">
              {e.title}
            </button>
          </div>
            )
        })}
     
    </div>
  )
}

export default JobButtons
