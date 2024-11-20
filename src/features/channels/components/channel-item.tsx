import { ListItem } from "@/shared/components/list-item/list-item"

export const ChannelItem = () => {
    return (
        <ListItem
            withChevron
        >
            <div className="flex flex-col">
                <span className="text-textWhite font-bold">Canal 1</span>
                <span className="text-textFilter">Canal 1</span>
            </div>
            <div className="flex flex-col items-end justify-between">
                <span className="text-textFilter text-xs">18:40</span>
            </div>
        </ListItem>
    )
}