import { ListItem } from "@/shared/components/list-item/list-item";

interface Props {
    contactName: string;
    date: string;
}

export const StateItem = ({contactName, date}: Props) => {

    return (
        <ListItem
            withSeparator
        >
            <div className="flex flex-col">
                <span className="text-textWhite font-bold">{contactName}</span>
                <span className="text-textFilter">{date}</span>
            </div>
            {/* <div className="flex flex-col items-end justify-between">
                <span className="text-textFilter text-xs">18:40</span>
            </div> */}
        </ListItem>
    )
}
