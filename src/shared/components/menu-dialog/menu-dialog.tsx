import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"
import { Dots } from "@/shared/icons/dots"
import { useSignal } from "@preact/signals-react"
import { DropdownMenuPortal } from "@radix-ui/react-dropdown-menu"
import React, { ReactNode } from "react"

interface Props {
    items: string[];
    children?: ReactNode;
}

export const MenuDialog = ({ items, children }: Props) => {

    const isExpanded = useSignal(false)

    return (
        <DropdownMenu onOpenChange={(active) => isExpanded.value = active}>

            <DropdownMenuTrigger asChild>
                <div className={cn("box-border p-2", {
                    'bg-secondary rounded-full ': isExpanded.value
                })}

                >
                    {
                        children ? children : <Dots />
                    }
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuPortal>
                <DropdownMenuContent className="bg-secondary rounded-sm text-textWhite border-none py-2 px-0 font-normal w-[270px] max-w-[270px] border absolute right-0">
                    {
                        items.map((item, index) => (
                            <React.Fragment key={index}>
                                {
                                    index === items.length - 1 && items.length > 1 ?
                                        <>
                                            <Separator className="bg-borderBottomColor" />
                                            <DropdownMenuItem className="focus:bg-primary focus:text-textWhite cursor-pointer">
                                                <span className="py-1 px-4">
                                                    {item}
                                                </span>
                                            </DropdownMenuItem>
                                        </>

                                        : <DropdownMenuItem className="focus:bg-primary focus:text-textWhite cursor-pointer">
                                            <span className="py-1 px-4">
                                                {item}
                                            </span>
                                        </DropdownMenuItem>

                                }
                            </React.Fragment>

                        ))
                    }
                </DropdownMenuContent>
            </DropdownMenuPortal>

        </DropdownMenu>
    )
}