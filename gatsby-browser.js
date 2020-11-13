/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

import React from "react"
import { AuthProvider } from "./src/utils/contexts/AuthContext"
import { AlertProvider } from "./src/utils/contexts/AlertContext"
import { LoadingProvider } from "./src/utils/contexts/LoadingContext"
import "./src/styles/app.scss"

export const wrapRootElement = ({ element }) => (
  <AuthProvider>
    <AlertProvider>
      <LoadingProvider>
        {element}
      </LoadingProvider>
    </AlertProvider>
  </AuthProvider>
)
