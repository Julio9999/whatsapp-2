import { ReactNode } from "react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./tooltip";

interface Props {
    text: string;
    children: ReactNode;
}

export const CustomToolTip = ({text, children}: Props) => {
    return (
        <TooltipProvider>
        <Tooltip delayDuration={100}>
          <TooltipTrigger asChild className="cursor-pointer">
            {children}
          </TooltipTrigger>
          <TooltipContent side="right" className="rounded-full px-4 font-medium shadow-none">
            {text}
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    )
}