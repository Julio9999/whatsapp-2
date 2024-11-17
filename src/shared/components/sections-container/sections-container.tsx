import { activeSection } from "@/shared/signals/view"
import { ChatList } from "@chat-list/components/chat-list"
import { States } from "@states/components/states"
import { View } from '@side-bar/interfaces/side-bar.interface';
import { Channels } from "@channels/components/channels";
import { Comunities } from "@comunities/components/comunities";



export const SectionsContainer = () => {

    const sections = {
        [View.chats] : <ChatList />,
        [View.states]: <States />,
        [View.channels]: <Channels />,
        [View.comunities]: <Comunities />
    }

    return (
        <article className="bg-primary w-[32%] overflow-auto flex flex-col">
            {sections[activeSection.value] || null}
        </article>
    )
}