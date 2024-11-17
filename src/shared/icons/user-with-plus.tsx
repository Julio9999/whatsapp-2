import { Plus, User } from "."

export const UserWithPlus = () => {
    return (
        <div className="relative">
            <User height="h-10" width="w-10" />
            <Plus className="absolute -bottom-1 -right-1 bg-textDarkGreen rounded-full text-textWhite w-4 h-4 border-black border-2 box-content" />
        </div>
    )
}