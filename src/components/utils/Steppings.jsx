const Steppings = ({id, body}) => {
    return ( 

       <div className="flex flex-row gap-4 items-center justify-start">
        <div>
            <h1 className="flex w-[60px] h-[55px] items-center justify-center rounded-[15px] bg-[#ffffff1c]" >0{id}</h1>
        </div>
        <p className="text-[18px] w-[60%] lg:w-[100%]" >{body}</p>
       
       </div>
        
     );
}
 
export default Steppings;