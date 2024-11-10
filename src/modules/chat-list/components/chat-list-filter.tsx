import { cn } from "@/lib/utils";
import { activeFilter } from "@shared/signals/filter";
import { Filter } from "../constants/filter.interface";

interface Props {
  text: string;
  filter: Filter
}

export const ChatListFilter = (
  {
    text,
    filter
  }: Props
) => {



  return (
    <div>
      <span
        onClick={() => activeFilter.value = filter}
        className={cn("text-[15px] text-textFilter  bg-secondary py-1 px-2 rounded-xl cursor-pointer", {
          "bg-bgDarkGreen text-textDarkGreen": activeFilter.value == filter
        })} >
        {text}
      </span>
    </div>
  )
}