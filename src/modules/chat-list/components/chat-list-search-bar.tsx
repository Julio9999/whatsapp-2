import { Input } from "@/components/ui/input"
import { Search } from "@shared/icons"

export const ChatListSearchBar = () => {
  return (
    <div className="flex bg-secondary items-center rounded-md px-3 gap-3 mb-2.5">
      <Search />
      <Input className="bg-transparent h-inputHeight border-none text-textWhite focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-ring focus-visible:ring-offset-0" placeholder="Buscar" />      
    </div>
  )
}
