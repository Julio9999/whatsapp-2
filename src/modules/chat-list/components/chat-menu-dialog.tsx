import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"
import { Dots } from "@/modules/shared/icons/dots"
import { useSignal } from "@preact/signals-react"
import { DropdownMenuPortal } from "@radix-ui/react-dropdown-menu"

export const ChatMenuDialog = () => {

    const isExpanded = useSignal(false)

    return (
        <DropdownMenu onOpenChange={(active) => isExpanded.value = active}>

            <DropdownMenuTrigger asChild>
                <div className={cn("box-border p-2", {
                    'bg-secondary rounded-full ': isExpanded.value
                })}

                >
                    <Dots />
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuPortal>
                <DropdownMenuContent className="bg-secondary rounded-sm text-textWhite border-none py-2 px-0 font-normal w-[270px] max-w-[270px] border absolute right-0">
                    <DropdownMenuItem className="focus:bg-primary focus:text-textWhite cursor-pointer">
                        <span className="py-1 px-4">
                            Nuevo grupo
                        </span>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="focus:bg-primary focus:text-textWhite cursor-pointer">
                        <span className="py-1 px-4">
                            Mensajes destacados
                        </span>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="focus:bg-primary focus:text-textWhite cursor-pointer">
                        <span className="py-1 px-4">
                            Seleccionar chats
                        </span>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="focus:bg-primary focus:text-textWhite cursor-pointer mb-1">
                        <span className="py-1 px-4">
                            Cerrar sesión
                        </span>
                    </DropdownMenuItem>
                    <Separator className="bg-borderBottomColor" />
                    <DropdownMenuItem className="focus:bg-primary focus:text-textWhite cursor-pointer">
                        <span className="py-1 px-4">
                            Obtener WhatsApp para Windows
                        </span>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenuPortal>

        </DropdownMenu>
    )
}