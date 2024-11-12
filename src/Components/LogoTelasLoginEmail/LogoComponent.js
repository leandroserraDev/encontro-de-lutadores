import image from '../../fight-png-17964.png'


function LogoComponent() {
    return (<div className='flex flex-col'>
         <img className="
         w-50
            h-40
            self-center
        
            mt-14"
                src={image} height={50} width={50} />

            <div className="  flex flex-col w-full h-[100px] items-center ">
                <h2 className="mb-[-2px] ">Bem-Vindo</h2>
                <span className=" text-center text-[7pt] text-gray-400">Encontre seu novo combate</span>

            </div>
    </div>)
}

export default LogoComponent;