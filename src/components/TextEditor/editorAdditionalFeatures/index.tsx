import menuItemInterface from "../../../interfaces/menuItemInterface";

function setWrappedContent(
  editor: any,
  styles?: string,
  exclude: string = ""
): void {
  let selectedContent: string = editor.selection.getContent();

  if (selectedContent.includes(exclude)) {
    let reg = new RegExp(`(style="${exclude})(.*?;)"`, "g");
    selectedContent = selectedContent.replace(reg, "");
  }

  let newElement = `<span style="${styles}">${selectedContent}</span>`;
  editor.insertContent(newElement);
}

function addTextStyle(
  t: number,
  editor: any,
  textProps: string = "",
  units: string = ""
): menuItemInterface {
  return {
    text: t.toString(),
    type: "menuitem",
    onAction: (): void => {
      setWrappedContent(editor, `${textProps}: ${t}${units}`, textProps);
    }
  };
}

function onSaveContent(editor: any) {
  const content = editor.getContent();
  localStorage.setItem("content", content);
}

export { onSaveContent, addTextStyle };
