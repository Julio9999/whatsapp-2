
import { cn } from "@/lib/utils";

import { Channels, Chats, Comunities, Configuration, State, User,  } from "@shared/icons";
import { View } from "../interfaces/side-bar.interface";

import { CustomToolTip } from "@/components/ui/custom-tooltip";
import { activeSection } from "@shared/signals/view"


export const SideBar = () => {
    return (
        <article className={"flex flex-col items-center gap-6 bg-secondary py-4 px-2"}>
            <CustomToolTip text="Chats">
                <div 
                onClick={() => activeSection.value = View.chats} 
                className={cn("p-2", {
                    "bg-activeSection  rounded-full": activeSection.value === View.chats
                })}>
                    <Chats />
                </div>
            </CustomToolTip>

            <CustomToolTip text="Estados">
                <div 
                onClick={() => activeSection.value = View.states} 
                className={cn("p-2", {
                    "bg-activeSection rounded-full": activeSection.value === View.states
                })}
                >
                    <State />
                </div>
            </CustomToolTip>

            <CustomToolTip text="Canales">
                <div
                onClick={() => activeSection.value = View.channels} 
                className={cn("p-2", {
                    "bg-activeSection  rounded-full": activeSection.value === View.channels
                })}
                >
                    <Channels />
                </div>
            </CustomToolTip>

            <CustomToolTip text="Comunidades">
                <div
                onClick={() => activeSection.value = View.comunities} 
                className={cn("p-2", {
                    "bg-activeSection  rounded-full": activeSection.value === View.comunities
                })}
                >
                    <Comunities />
                </div>
            </CustomToolTip>

            <div className="flex-1 flex items-center justify-end flex-col  gap-6">
                <CustomToolTip text="Ajustes">
                    <div>
                        <Configuration />
                    </div>
                </CustomToolTip>

                <CustomToolTip text="Perfil">
                    <div>
                        <User />
                    </div>
                </CustomToolTip>
            </div>
        </article>
    )
}
