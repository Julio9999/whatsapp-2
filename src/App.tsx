import { SideBar } from "./components/layout/side-bar/side-bar"

function App() {


  return (
    <main className="flex flex-col items-start justify-start  h-screen">
      <section className="flex max-w-[1600px] max-h-[913px] h-screen m-auto">
        <SideBar />
      </section>
    </main>
  )
}

export default App
