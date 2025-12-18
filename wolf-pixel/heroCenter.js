const heroCenter = () => {
    const stats = [
        {
            count: "+200",
            title: "Project completed",
        },
        {
            count: "+50",
            title: "Startup raised"
        }
    ]
    let finalStats = stats.map((stat) => {
        let count = React.createElement("h5", { class: "count" }, stat.count)
        let title = React.createElement("h3", { class: "title" }, stat.title)
        return React.createElement("div", { id: "statBox" }, [count, title])
    })
    let statsContainer = React.createElement("div", { id: "stats" }, finalStats)
    let bigText = React.createElement("h1", { id: "bigText" }, "Hello")
    let headline = React.createElement("h4", { id: "headline" }, "- It's D.Nova a design wizerd")
    let centeredText = React.createElement("div", { id: "centeredText" }, [bigText, headline])
    let scrollDownText = React.createElement("p", { id: "scrolldownText" }, "Scroll down")
    let downArrow = React.createElement("i", { class: "ri-arrow-down-line" })
    let scrollDown = React.createElement("div", { id: "scrollDown" }, [scrollDownText, downArrow])

    return React.createElement("div", { id: "hero-center" }, [statsContainer, centeredText, scrollDown])
}
export default heroCenter