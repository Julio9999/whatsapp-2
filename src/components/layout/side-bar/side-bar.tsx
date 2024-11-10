import { Channels } from "@/components/icons/channelts";
import { Chats } from "@/components/icons/chats";
import { Comunities } from "@/components/icons/comunities";
import { Configuration } from "@/components/icons/configuration";
import { State } from "@/components/icons/state";
import { User } from "@/components/icons/user";
import { CustomToolTip } from "@/components/ui/custom-tooltip";

export const SideBar = () => {
    return (
        <section className="bg-secondary  p-4 flex flex-col items-center gap-6">
            <CustomToolTip text="Chats">
                <div className="bg-activeSection p-2 rounded-full">
                    <Chats />
                </div>
            </CustomToolTip>

            <CustomToolTip text="Estados">
                <div>
                    <State />
                </div>
            </CustomToolTip>

            <CustomToolTip text="Canales">
                <div>
                    <Channels />
                </div>
            </CustomToolTip>

            <CustomToolTip text="Comunidades">
                <div>
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
        </section>
    )
}
