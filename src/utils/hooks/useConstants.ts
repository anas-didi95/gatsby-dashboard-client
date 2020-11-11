const useConstants = () => {
  const getApiSecurity = (): string => {
    if (process.env.GATSBY_API_SECURITY) {
      return process.env.GATSBY_API_SECURITY
    } else {
      console.error(
        "[useConstants] getApiSecurity failed! GATSBY_API_SECURITY is undefined"
      )
      return ""
    }
  }

  const getApiBot = (): string => {
    if (process.env.GATSBY_API_BOT) {
      return process.env.GATSBY_API_BOT
    } else {
      console.error(
        "[useConstants] getApiBot failed! GATSBY_API_BOT is undefined"
      )
      return ""
    }
  }

  return { getApiSecurity, getApiBot }
}

export default useConstants
