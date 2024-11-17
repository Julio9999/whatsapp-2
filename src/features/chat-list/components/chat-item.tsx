import { cn } from "@/lib/utils";
import { User } from "@shared/icons";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

export const ChatItem = () => {

    const [hover, setHover] = useState(false);

    return (
        <div 
        onMouseEnter={() => setHover(() => true)}
        onMouseLeave={() => setHover(() => false)}
        className="py-3 cursor-pointer  px-4 hover:bg-chatItemBgColor  border-b-borderBottomColor border-b"
        >
            <div className="flex items-start gap-4 ">
                <div>
                    <User width="w-12" height="h-12" />
                </div>
                <div className="flex justify-between w-full">
                    <div className="flex flex-col">
                        <span className="text-textWhite font-bold">Mamá</span>
                        <span className="text-textFilter">Si</span>
                    </div>
                    <div className="flex flex-col items-end justify-between  overflow-hidden">
                        <span className="text-textFilter text-xs">18:40</span>
                        <FaChevronDown className={cn("text-iconColor translate-x-96 translate-y-0 transition-all", {
                            "translate-x-0": hover
                        })} />
                    </div>
                </div>
            </div>
        </div>
    )
}
