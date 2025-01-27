import { Icons } from "@/icons"

export const Logo = () => {
    return (
        <div className="flex items-center w-fit h-12">
            <Icons.logo width={40} height={40}/>
            <h3 className="text-2xl font-bold">Restaurant</h3>
        </div>
    )    
}