import { NewChat } from "@shared/icons/new-chat";
import { ChatListFilterContainer } from ".";
import { ChatMenuDialog } from "./chat-menu-dialog";
import { TitleSection } from "@/shared/components/title-section/title-section";

export const ChatListHeader = () => {
    return (
        <article className="mb-0 px-4 py-2">
            <div className="flex justify-between items-center mb-6">
                <TitleSection title="Chats" />
                <div className="flex items-center gap-4">
                    <NewChat />
                    <ChatMenuDialog />
                </div>
            </div>
            <ChatListFilterContainer />
        </article>
    )
}