import { useState } from "react"
import { EmailIcon } from "./EmailIcon"
import { TelIcon } from "./icons/TelIcon"


export function MailTelIcon() {
    const [showEmail, setShowEmail] = useState(false)
    const [showTel, setShowTel] = useState(false)
  

    const EmailHandleClick = () => {
        setShowEmail((prev) => !prev)
    }

    const TelHandleClick = () => {
        setShowTel((prev) => !prev)
    }

    return (
        <>
        <div className="flex gap-4">
            <div className="flex justify-left items-center gap-2">
                <EmailIcon size={42} onClick={EmailHandleClick}/>
                {showEmail && (
                    <span>simongallien@orange.fr</span>
                )}
             </div>
            <div className="flex justify-left items-center gap-2">
                <TelIcon size={32} onClick={TelHandleClick}/>
                {showTel && (
                    <span>06 31 02 11 55</span>
                )}
            </div>
        </div>
        </>

    )
}