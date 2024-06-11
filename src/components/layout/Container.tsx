import { Outlet } from "react-router-dom";

export default function Container(){
    return(
        <div className="flex justify-center w-full px-4">
            <div className="max-w-[1200px] w-full">
                <Outlet />
            </div>
        
        </div>
    )
}