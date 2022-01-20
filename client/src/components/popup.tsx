import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const Popup = (msg: String) => {
  return toast.dark(msg, {
    position: 'top-right',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined
  } as any)
}
