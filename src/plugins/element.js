import Vue from "vue";
import {
  Button,
  Form,
  FormItem,
  Input,
  Message,
  Steps,
  Step,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  Carousel,
  CarouselItem,
  Popover,
} from "element-ui";

Vue.use(Button);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);
Vue.prototype.$message = Message;
Vue.use(Steps);
Vue.use(Step);
Vue.use(Dropdown);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.use(Popover);
