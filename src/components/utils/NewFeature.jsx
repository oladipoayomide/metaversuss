import styles from "../../styles";

const NewFeature = ({imgUrl, title, subtitle}) => {
    return ( <div className="flex flex-col gap-3">
           <div className="flex w-[60px] h-[55px] items-center justify-center rounded-[15px] bg-[rgba(255,255,255,0.3)]" >
            <img src={imgUrl} className="w-[50%] h-[auto]" alt={imgUrl} />
           </div>
           <h1 className="text-[30px] font-bold">{title}</h1>
           <p>{subtitle}</p>
    </div> );
}
 
export default NewFeature;