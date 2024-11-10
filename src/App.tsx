import { SideBar } from '@side-bar/components/side-bar';
import { ChatList } from "@chat-list/components/chat-list";
import { Chat } from "@chat/components/chat";


function App() {


  return (
    <main className="flex flex-col items-start justify-start  h-screen bg-gray-950">
      <section className="flex max-w-[1600px] max-h-[913px] h-screen m-auto  w-full">
        <SideBar />
        <ChatList />
        <Chat />
      </section>
    </main>
  )
}

export default App
