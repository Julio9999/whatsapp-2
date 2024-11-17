import { Button } from "@/components/ui/button"
import logo from "@assets/whatsapp-web.png"

export const Chat = () => {
    return (
        <article className="bg-secondary flex-1 items-center justify-center flex">
            <picture className="flex flex-col text-textWhite items-center justify-center p-16">
                <img src={logo} className="xl:w-80 xl:h-48 w-60 mb-6" />
                <div className="text-center">
                    <span className="xl:text-4xl text-3xl font-light">Descarga WhatsApp para Windows</span>
                    <p className="text-center text-sm my-4 text-gray">Descarga la aplicación para Windows y haz llamadas, comparte pantalla y disfruta de una experiencia más rápida.</p>
                </div>
                <Button className="bg-textDarkGreen text-dark rounded-3xl px-6 hover:bg-textDarkGreenHover">Descargar de Microsoft Store</Button>
            </picture>
        </article>
    )
}