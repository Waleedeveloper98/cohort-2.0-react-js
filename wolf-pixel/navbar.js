
const Navbar = () => {
    let linksText = ["About Me", "Porfolio", "Services", "Blog"]
    let link = linksText.map((link) => {
        return React.createElement("a", { class: "link", href: "#" }, `${link}`)
    })
    let logo = React.createElement("img", { src: "./logo.png", id: "logo" })
    let links = React.createElement("div", { id: "links" }, link)
    let ctaLink = React.createElement("a", { href: "#", id: "ctaLink" }, "Book A Call")
    let arrow = React.createElement("i", { className: "ri-arrow-right-up-long-line" })
    let ctaBtn = React.createElement("button", { id: "ctaBtn" }, [ctaLink, arrow])
    let rightSide = React.createElement("div", { id: "right" }, ctaBtn)
    let leftSide = React.createElement("div", { id: "left" }, [logo, links])
    return React.createElement("nav", null, [leftSide, rightSide])
}

export default Navbar
