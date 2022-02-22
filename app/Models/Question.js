import { generateId } from "../Utils/generateId.js"

export class Question {
  constructor(data) {
    this.id = generateId()
    this.question = data.question
    this.answer = data.correct_answer
  }


  get Template() {
    return `
    <div class="col-6">
      <div class="rounded bg-purplepink m-3 shadow">
        <div id='color' class="rounded-bottom text-center p-2">
          <h4 class="d-flex justify-content-between">
            ${this.question}
          </h4>
          <div class="d-flex justify-content-between">
          <button class="btn btn-primary imported-font" onclick="app.questionsController.answerQuestion('${this.id}', 'True')">True</button>
          <button class="btn btn-danger imported-font text-dark" onclick="app.questionsController.answerQuestion('${this.id}', 'False')">False</button>
          </div>
        </div>
      </div>
    </div>

  `
  }

}