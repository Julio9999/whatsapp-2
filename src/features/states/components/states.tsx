import { Separator } from "@/components/ui/separator";
import { TitleSection } from "@/shared/components/title-section/title-section"
import { Plus } from "@/shared/icons";
import { Dots } from "@/shared/icons/dots"
import { UserWithPlus } from "@/shared/icons/user-with-plus";
import { StateItem } from "./state-item";

export const States = () => {
    return (
        <article className="mb-0  overflow-auto flex flex-col">
            <div className="flex justify-between items-center mb-6 px-4 py-3">
                <TitleSection title="Estados" />
                <div className="flex items-center gap-4">
                    <Plus />
                    <Dots />
                </div>
            </div>
            <div className="flex gap-3 px-4 pb-4">
                <div className="flex  items-center justify-center">
                    <UserWithPlus />
                </div>
                <div className="flex flex-col">
                    <span className="text-textWhite">Mi estado</span>
                    <span className="text-textFilter text-xs">Haz clic para añadir una actulización de estado</span>
                </div>
            </div>

            <Separator className="h-2 bg-black" />



            <div className="overflow-auto">
                <div className="flex gap-3 pt-7 relative flex-col">
                    <span className="text-textDarkGreen px-6 pb-4">RECIENTE</span>
                    <Separator className="bg-borderBottomColor" />
                </div>
                <StateItem />
                <StateItem />
                <StateItem />
                <StateItem />
                <StateItem />
                <StateItem />
                <StateItem />
                <StateItem />
                <StateItem />
                <StateItem />
                <StateItem />
            </div>


        </article>
    )
}