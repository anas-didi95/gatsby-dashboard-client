type ToastType = "is-success" | "is-danger"

const useToast = () => {
  if (typeof document !== "undefined") {
    const { toast } = require("bulma-toast")
    return (message: string, type: ToastType) =>
      toast({
        duration: 30000,
        position: "top-center",
        dismissible: true,
        pauseOnHover: true,
        closeOnClick: false,
        message: `<p class='has-text-weight-bold'>${message}</p>`,
        type: type,
      })
  } else {
    return (message: string, type: ToastType) => {
      switch (type) {
        case "is-success":
          console.info(message)
          break
        case "is-danger":
          console.error(message)
          break
      }
    }
  }
}

export default useToast
