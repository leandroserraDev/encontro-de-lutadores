import '../input.css';

function Button({bgColor, textColor,textSize, width, height, text, funcOnClick}){

  return (
    
    <>
     <button 
     onClick={() => funcOnClick()}
     className={`self-center 
                            rounded-full
                          ${bgColor}
                          ${width}
                          ${height}
                            font-bold 
                            ${textColor}
                            ${textSize}
                            hover:scale-105
                            duration-150
                            mb-1
                            self-center 
                            rounded-full
                            font-bold 

                            `}

                > {text}</button>
    </>
    
)
}

export default Button;