import App from "./App.svelte";
import { courses } from "./golf_data";

const app = new App({
  target: document.body,
  props: {
    courseData: "hej",
  },
});

export default app;
