import { NewChat } from "@shared/icons/new-chat";
import { Dots } from "@shared/icons/dots"
import { ChatListFilterContainer } from ".";

export const ChatListHeader = () => {
    return (
        <article className="mb-3 px-4 ">
            <div className="flex justify-between items-center mb-6">
                <span className="text-[22px] font-bold text-white">Chats</span>
                <div className="flex items-center gap-6">
                    <NewChat />
                    <Dots />
                </div>
            </div>
            <ChatListFilterContainer />
        </article>
    )
}