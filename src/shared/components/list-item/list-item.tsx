import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { User } from "@/shared/icons/user";
import { ReactNode, useState } from "react"
import { FaChevronDown } from "react-icons/fa";

interface Props {
    children: ReactNode;
    withChevron?: boolean;
    withSeparator?: boolean;
}

export const ListItem = (
    {
        withChevron,
        withSeparator,
        children
    }: Props) => {
    const [hover, setHover] = useState(false);

    return (
        <div
            onMouseEnter={() => setHover(() => true)}
            onMouseLeave={() => setHover(() => false)}
            className="py-3 cursor-pointer  hover:bg-chatItemBgColor relative overflow-x-hidden min-h-[73px]"
        >
            <div className="flex items-start gap-4">

                <div className="flex justify-between w-full flex-col">
                    <div className="flex gap-3 justify-between w-full px-4 flex-col">
                        <div className="flex gap-4">
                            <div>
                                <User width="w-12" height="h-12" />
                            </div>
                            <div className="flex justify-between w-full  flex-1">
                                {withSeparator && <Separator className="bg-borderBottomColor absolute bottom-0" />} 
                                {children}
                            </div>
                        </div>
                    </div>
                    {
                        withChevron &&
                        <div className="flex flex-col items-end justify-between">
                            <FaChevronDown className={cn("text-iconColor absolute -right-4 bottom-1 transition-all", {
                                "right-4": hover
                            })} />
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

