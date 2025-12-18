import HeroLeft from "./heroLeft.js"
import HeroCenter from "./heroCenter.js"
import HeroRight from "./heroRight.js"

const Hero = () => {
    return React.createElement("section", { id: "hero" }, [HeroLeft(), HeroCenter(),HeroRight()])
}

export default Hero