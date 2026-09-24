import Linkdin from "../assets/LinkedIn Logo.jpeg";

const JobCards = (props) => {
  return (
    <div>
      <div id='jobsCard' className="min-h-70vh w-full gap-4 flex overflow-x-auto p-1 sm:gap-5 sm:p-3">
        {props.jobsData.map((e)=>{
            return(
<div key={e.id} className="h-72 w-64 border border-slate-100 shadow-md bg-white rounded-2xl p-4 flex justify-between flex-col shrink-0 transition hover:-translate-y-1 hover:shadow-xl">
                    <div>
                        
                      <div className="flex justify-between items-center ">
                        <img
                          className=" h-10 w-10 object-cover rounded-full"
                          src={Linkdin}
                          alt="amazon"
                        />
                        <button className="text-sm text-black">save</button>
                      </div>
                      <div className="mt-2">
                        <h4 className="font-medium text-black">
                          {e.company} <span className="text-[10px] text-gray-500">{e.createdAt ? "Just posted" : "5 days ago"}</span></h4>
                        <h1 className=" font-medium text-black">
                          {e.title}
                        </h1>
                        <div className="text-[9px] font-medium flex gap-1 mt-1">
                          <button className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full">
                            {e.type || "Full-time"}
                          </button>
                        </div>
                      </div>
                    </div>
                    <h1 className="relative text-black top-5">
                      <hr />
                    </h1>
                    <div className="flex justify-between  items-center">
                      <div>
                        <h3 className="text-md text-black font-medium">{e.salary}</h3>
                        <p className="text-xs text-black font-medium">{e.location}</p>
                      </div>
      
                      <div>
                        <button className="text-[10px] bg-blue-600 py-1.5 text-white px-3 rounded-full hover:bg-blue-700">
                          Apply Now
                        </button>
                      </div>
                    </div>
                  </div>
            )
        })}
                  
                </div>
    </div>
  )
}

export default JobCards
