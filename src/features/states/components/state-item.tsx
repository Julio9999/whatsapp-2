import { Separator } from "@/components/ui/separator";
import { User } from "@shared/icons";

export const StateItem = () => {


    return (
        <div
            className="pt-3 cursor-pointer  hover:bg-chatItemBgColor  relative"
        >
            <div className="flex gap-4 flex-col pl-4">
                <div className="flex gap-3 items-center ">
                    <div>
                        <User width="w-10" height="h-10" />
                    </div>
                    <div className="flex justify-between w-full flex-col gap-4">
                        <div className="flex flex-col  w-full flex-1">
                            <span className="text-textWhite font-bold">Mamá</span>
                            <span className="text-textFilter">Hoy a las 11:30</span>
                        </div>
                        <Separator className="bg-borderBottomColor w-full" />
                    </div>
                </div>
            </div>
        </div>
    )
}
