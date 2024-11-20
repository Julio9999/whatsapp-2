import { SearchBar } from "@/shared/components/search-bar/search-bar"
import { ChatListFilters } from "."
import { placeholderText } from "../signals/filter"


export const ChatListFilterContainer = () => {
    return (
        <div>
            <SearchBar placeHolder={placeholderText.value} />
            <ChatListFilters />
        </div>
    )
}