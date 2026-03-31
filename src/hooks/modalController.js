import { useEffect, useRef, useState } from "react"

function modalController() {
    const [modal, setModal] = useState(false)
    const dialogRef = useRef(null)

    const abrir = () => setModal(true)
    const fechar = () => setModal(false)

    useEffect(() => {
        if (!dialogRef.current) return;
        
        if (modal) {
            dialogRef.current.showModal();
        } else {
            dialogRef.current.close();
        }
    }, [modal]);

    return{
        abrir,
        fechar,
        dialogRef
    }
}

export default modalController