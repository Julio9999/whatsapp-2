import { MenuDialog } from "@/shared/components/menu-dialog/menu-dialog"


export const ChatMenuDialog = () => {

    const items = [
        "Nuevo grupo",
        "Mensajes destacados",
        "Seleccionar chats",
        "Cerrar sesión",
        "Obtener WhatsApp para Windows"
    ]

    return (
        <MenuDialog
            items={items}
        />
    )
}