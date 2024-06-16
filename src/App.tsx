import { Button, Center } from "@mantine/core"
import { styles } from "./styles/index.css"

function App() {
  return (
    <Center>
      <h3 className={styles.title}>Hello</h3>
      <p className={styles.subTitle}>World</p>
      <Button variant="subtle">Click me</Button>
    </Center>
  )
}

export default App
