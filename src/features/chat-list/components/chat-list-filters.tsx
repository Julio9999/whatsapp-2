import { ChatListFilter } from "."
import { Filter } from "../constants/filter.interface"

export const ChatListFilters = () => {
  return (
    <div className="flex gap-2">
        <ChatListFilter
            text="Todos"
            filter={Filter.all}
         />
        <ChatListFilter
            text="No leídos"
            filter={Filter.notRead}
         />
        <ChatListFilter
            text="Favoritos"
            filter={Filter.favorites}
         />
        <ChatListFilter
            text="Grupos"
            filter={Filter.groups}
         />
    </div>
  )
}
