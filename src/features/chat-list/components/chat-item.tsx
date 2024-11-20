import { ListItem } from "@/shared/components/list-item/list-item";

interface Props {
    contactName: string;
    message: string;
}

export const ChatItem = ({contactName, message}: Props) => {

    return (
        <ListItem
            withChevron
            withSeparator
        >
            <div className="flex flex-col">
                <span className="text-textWhite font-bold">{contactName}</span>
                <span className="text-textFilter">{message}</span>
            </div>
            <div className="flex flex-col items-end justify-between">
                <span className="text-textFilter text-xs">18:40</span>
            </div>
        </ListItem>
    )
}
