// autobind decorator
function autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    get() {
      const boundFn = originalMethod.bind(this);
      return boundFn;
    },
  };
  return adjDescriptor;
}

// ProjectInput Class
class ProjectInput {
  templateElement: HTMLTemplateElement; // template要素取得用
  hostElement: HTMLDivElement; // template要素出力用
  element: HTMLFormElement; // template内要素取得用
  titleInputElement: HTMLInputElement; // form_title取得用
  descriptionInputElement: HTMLInputElement; // form_description取得用
  mandayInputElement: HTMLInputElement; // form_manday取得用

  constructor() {
    // tamplateタグの内容を取得
    this.templateElement = document.getElementById(
      "project-input"
    )! as HTMLTemplateElement;
    this.hostElement = document.getElementById("app")! as HTMLDivElement;

    // template内のタグの中身を再帰的に取得
    const importedNode = document.importNode(
      this.templateElement.content,
      true
    );
    this.element = importedNode.firstElementChild as HTMLFormElement;
    this.element.id = "user-input"; // cssのuser-inputを適用

    // form内要素の入力値を取得
    this.titleInputElement = this.element.querySelector(
      "#title"
    ) as HTMLInputElement;
    this.descriptionInputElement = this.element.querySelector(
      "#description"
    ) as HTMLInputElement;
    this.mandayInputElement = this.element.querySelector(
      "#manday"
    ) as HTMLInputElement;

    this.configure();
    this.attach();
  }

  private gatherUserInout(): [string, string, number] | void {
    const enteredTitle = this.titleInputElement.value;
    const enteredDescription = this.descriptionInputElement.value;
    const enteredManday = this.mandayInputElement.value;
    if (
      enteredTitle.trim().length === 0 ||
      enteredDescription.trim().length === 0 ||
      enteredManday.trim().length === 0
    ) {
      alert("入力値が正しくありません。再度お試しください。");
      return;
    } else {
      return [enteredTitle, enteredDescription, +enteredManday];
    }
  }

  private clearInputs() {
    this.titleInputElement.value = "";
    this.descriptionInputElement.value = "";
    this.mandayInputElement.value = "";
  }

  // 指定されたタグ内の値を出力する
  @autobind
  private submitHandler(event: Event) {
    event.preventDefault();
    console.log(this.titleInputElement.value);
    const userInput = this.gatherUserInout();
    if (Array.isArray(userInput)) {
      const [title, desc, manday] = userInput;
      console.log(title, desc, manday);
      this.clearInputs();
    }
  }

  // submitが押されたことを受信する
  private configure() {
    this.element.addEventListener("submit", this.submitHandler);
  }

  // 取得した要素を追加し表示する
  private attach() {
    this.hostElement.insertAdjacentElement("afterbegin", this.element);
  }
}

const prjInput = new ProjectInput();
