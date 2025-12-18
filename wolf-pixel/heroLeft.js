
const heroLeft = () => {
    let productDesigner = React.createElement("h4",null,"product designer")
    let year = React.createElement("p",null,"2024")
    let line = React.createElement("div", { id: "line" })
    return React.createElement("div", { id: "hero-left" }, [productDesigner, line, year])
}

export default heroLeft