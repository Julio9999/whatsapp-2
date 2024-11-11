import { ChatItems, ChatListHeader } from "."



export const ChatList = () => {
    return (
        <article className="bg-primary w-[32%] overflow-auto flex flex-col">
            <ChatListHeader />
            <ChatItems />
        </article>
    )
}