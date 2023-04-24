const InsightTool = ({ imgUrl, title, body }) => {
    return (
        <div className="flex flex-col lg:flex-row w-[100%] lg:w-[90%]  gap-3 justify-center items-center mr-0">
            <img src={imgUrl} alt={imgUrl} className="rounded-[25px] object-cover w-[100%] lg:w-[270px] h-[250px] lg:h-[250px]" />
            <div className="text-left flex-col flex gap-3 lg:px-10">
                <h1 className="text-[30px]">{title}</h1>
                <p className="text-[20px] text-[gray]">{body}</p>
            </div>
            <img src="/arrow.svg" alt="arrow" className=" hidden lg:block p-3 border-[gray] border-2 rounded-[50%] border-radius-[2px] w-[80px] h-[80px]" />
        </div>
    );
}

export default InsightTool;