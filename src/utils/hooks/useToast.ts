import { toast } from "bulma-toast"

const useToast = () => {
  return (message: string, type: "is-success" | "is-danger") =>
    toast({
      duration: 30000,
      position: "top-center",
      dismissible: true,
      pauseOnHover: true,
      closeOnClick: false,
      message: `<p class='has-text-weight-bold'>${message}</p>`,
      type: type,
    })
}

export default useToast
