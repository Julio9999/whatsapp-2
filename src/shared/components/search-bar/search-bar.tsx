import { Input } from "@/components/ui/input"
import { useSignal } from "@preact/signals-react";

import { Search } from "@shared/icons"
import { LuArrowLeft } from "react-icons/lu";


interface Props {
    placeHolder: string;
    className?: string;
}

export const SearchBar = ({placeHolder, className}: Props) => {
  const focus = useSignal(false)
  return (
    <div className={`flex bg-secondary items-center rounded-md px-3 gap-3 mb-2.5 ${className}`}>
      {focus.value ? <LuArrowLeft size={22} className="text-textDarkGreen" /> : <Search />}
      <Input
        className="bg-transparent h-inputHeight border-none text-textWhite focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-ring focus-visible:ring-offset-0"
        placeholder={placeHolder}
        onFocus={() => focus.value = true}
        onBlur={() => focus.value = false}
      />
    </div>
  )
}
