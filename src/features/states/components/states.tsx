import { Separator } from "@/components/ui/separator";
import { TitleSection } from "@/shared/components/title-section/title-section"
import { Plus } from "@/shared/icons";
import { UserWithPlus } from "@/shared/icons/user-with-plus";
import { StateItem } from "./state-item";
import { MenuDialog } from "@/shared/components/menu-dialog/menu-dialog";

const items = [
    "Status Privacy"
]

export const States = () => {

    return (
        <article className="mb-0  overflow-auto flex flex-col">
            <div className="flex justify-between items-center mb-6 px-4 py-3">
                <TitleSection title="Estados" />
                <div className="flex items-center gap-4">
                    <Plus title="Add Status" />
                    <MenuDialog items={items} />
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
                <div className="flex gap-3 pt-7 relative flex-col items-end">
                    <span className="text-textDarkGreen px-6 pb-4 w-full">RECIENTE</span>
                    <Separator className="bg-borderBottomColor w-[80%]" />
                </div>
                <StateItem contactName="Contacto1" date="Hoy a la(s) 08:15" />
                <StateItem contactName="Contacto2" date="Hoy a la(s) 09:35" />
                <StateItem contactName="Contacto3" date="Hoy a la(s) 13:23" />
                <StateItem contactName="Contacto4" date="Hoy a la(s) 14:51" />
                <StateItem contactName="Contacto5" date="Hoy a la(s) 16:53" />
                <StateItem contactName="Contacto6" date="Hoy a la(s) 17:46" />
                <StateItem contactName="Contacto7" date="Hoy a la(s) 20:05" />
                <StateItem contactName="Contacto8" date="Hoy a la(s) 12:15" />
                <StateItem contactName="Contacto9" date="Hoy a la(s) 23:05" />
                <StateItem contactName="Contacto10" date="Hoy a la(s) 10:05" />
            </div>


        </article>
    )
}