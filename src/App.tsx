import { SideBar } from '@side-bar/components/side-bar';
import { Chat } from "@chat/components/chat";
import { SectionsContainer } from '@/shared/components/sections-container/sections-container';


function App() {


  return (
    <main className="flex items-center justify-center h-screen">
      <section className="flex max-w-[1600px] w-[98vw]  h-[95vh]">
        <SideBar />
        <SectionsContainer />
        <Chat />
      </section>
    </main>
  )
}

export default App
