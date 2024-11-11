import { ChatItems, ChatListHeader } from "."



export const ChatList = () => {
    return (
        <article className="bg-primary py-4 w-[32%] overflow-y-auto">
            <ChatListHeader />
            <ChatItems />
        </article>
    )
}