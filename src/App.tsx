import { SideBar } from '@side-bar/components/side-bar';
import { ChatList } from "@chat-list/components/chat-list";
import { Chat } from "@chat/components/chat";


function App() {


  return (
    <main className="flex items-center justify-center h-screen">
      <section className="flex max-w-[1600px] w-[98vw]  h-[95vh]">
        <SideBar />
        <ChatList />
        <Chat />
      </section>
    </main>
  )
}

export default App
