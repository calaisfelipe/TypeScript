import "./css/style.css";
import FullList from "./model/FullList";
import ListItem from "./model/ListItem";
import ListTemplate from "./template/ListItemTemplate";

const initApp = (): void => {
  const fullList = FullList.instance;
  const template = ListTemplate.instance;

  const itemEntryForm = document.getElementById(
    "itemEntryForm"
  ) as HTMLFormElement;

  itemEntryForm.addEventListener("submit", (e: SubmitEvent): void => {
    e.preventDefault();

    const inputHandler = document.getElementById("newItem") as HTMLInputElement;

    const newEntryText: string = inputHandler.value.trim();
    const itemId: number = fullList.list.length
      ? parseInt(fullList.list[fullList.list.length - 1].id) + 1
      : 1;

    const newItem = new ListItem(itemId.toString(), newEntryText);

    fullList.addItem(newItem);
    template.render(fullList);
  });

  const clearItems = document.getElementById(
    "clearItemsButton"
  ) as HTMLButtonElement;

  clearItems.addEventListener("click", (): void => {
    fullList.clearList();
    template.clear();
  });

  fullList.load();
  template.render(fullList);
};

document.addEventListener("DOMContentLoaded", initApp);
