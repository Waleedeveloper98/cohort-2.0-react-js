
import Navbar from "./navbar.js"
import Hero from "./hero.js"

const App = () => {
    return React.createElement(
        "div",
        { id: "main" },
        [Navbar(), Hero()]
    )
}

export default App
