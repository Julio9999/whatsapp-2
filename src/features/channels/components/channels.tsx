import { MenuDialog } from "@/shared/components/menu-dialog/menu-dialog"
import { SearchBar } from "@/shared/components/search-bar/search-bar"
import { TitleSection } from "@/shared/components/title-section/title-section"
import { Plus } from "@/shared/icons"
import { ChannelItem } from "./channel-item"

const items = [
    "Crear Canal",
    "Buscar Canales"
]

export const Channels = () => {
    return (
        <article className="mb-0  py-2">
            <div className="flex justify-between items-center mb-6 px-4">
                <TitleSection title="Canales" />
                <div className="flex items-center gap-4">
                    <MenuDialog items={items} >
                        <Plus title="Menú" />
                    </MenuDialog>
                </div>
            </div>
            <div className="px-4">
                <SearchBar placeHolder="Buscar" />
            </div>
            <ChannelItem />
            <ChannelItem />
            <ChannelItem />
            <ChannelItem />
            <ChannelItem />
            <ChannelItem />
        </article>

    )
}