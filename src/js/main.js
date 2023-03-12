// Load Styles
import '../scss/main.scss';

// Load Bootstrap init
import {initBootstrap} from "./bootstrap.js";

// Loading bootstrap with optional features
initBootstrap({
  tooltip: true,
  popover: true,
  toasts: true,
});

// App components
import API from "./utils/API.js";
import Input from "./components/Input.js";
import Select from "./components/Select.js";
import Header from "./components/Header.js"
