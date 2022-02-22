import { QuestionsController } from "./Controllers/QuestionsController.js";
import { ValuesController } from "./Controllers/ValuesController.js";

class App {
  questionsController = new QuestionsController();
}

window["app"] = new App();
