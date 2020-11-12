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

  const getApiBudget = (): string => {
    if (process.env.GATSBY_API_BUDGET) {
      return process.env.GATSBY_API_BUDGET
    } else {
      console.error(
        "[useConstants] getApiBudget failed! GATSBY_API_BUDGET is undefined"
      )
      return ""
    }

  }

  return { getApiSecurity, getApiBot, getApiBudget }
}

export default useConstants
