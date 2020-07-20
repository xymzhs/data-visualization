import Test from "./components/Test"
import Test2 from "./components/Test2"
import Test3 from "./components/Test3"
import Icon from "./components/Icon"
import SvgAnimation from "./components/SvgAnimation"
export default function (Vue){
    Vue.use(Test)
    Vue.use(Test2)
    Vue.use(Test3)
    Vue.use(Icon)
    Vue.use(SvgAnimation)
}