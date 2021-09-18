import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  style: {
    global: {
      backgroundColor: "orange.50",
      color: "gray.800",
    },
    p: {
      fontSize: {base: "md", md: "lg"},
      lineHeight: "tail"
    }

  }
})

export default theme;