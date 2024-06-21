export const Navbar = () => {
    return <div className="2xl:w-[1440px] h-[110px] m-auto items-center justify-center content-center
                            lg:w-[100px]">
        <div className="flex justify-between">
            <div className="flex items-center"> <img src="/pictures/image 20.png" className="w-[62px] h-[62px]"></img>
                <img src="/pictures/coffee namu mongolia.png" className="w-[120px] h-[40px]"></img></div>
            <div className="flex items-center justify-end w-[1067px] gap-x-12" >
                <div className="flex justify-between w-[325px] h-[51px] gap-y-6">
                    <div className="flex items-center gap-1"><img src="/pictures/Vector.png" className="w-[14px] h-[14px] gap-y-1"></img><h3>Меню</h3></div>
                    <div className="flex items-center gap-1"><img src="/pictures/gift.png" className="w-[14px] h-[14px] gap-y-1"></img><h3>Бонус</h3></div>
                    <div className="flex items-center gap-1"><img src="/pictures/tereg.png" className="w-[14px] h-[14px] gap-y-1"></img><h3>Захиалга</h3></div>
                </div>
                <div className="flex gap-x-6">
                    <div className="w-[106px] h-[48px] text-orange-400 bg-white flex items-center justify-center text-center rounded-md border-solid border-amber-500 border-2">Нэвтрэх</div>
                    <div className="w-[106px] h-[48px] text-white bg-amber-700 flex items-center justify-center text-center rounded-md">Бүртгүүлэх</div>
                </div>
            </div>
        </div>
    </div>
}