import React from "react";
import { Editor } from "@tinymce/tinymce-react";
import { toast } from "react-toastify";
import { addTextStyle, onSaveContent } from "./editorAdditionalFeatures";
import initValue from "./initText.json";
import "./styles.sass";

const REACT_APP_TINY_API_KEY = process.env.REACT_APP_TINY_API_KEY;

const weightList: number[] = [100, 200, 300, 400, 500, 600, 700, 800, 900];
const letterSpaceList: number[] = [0.6, 0.8, 1, 1.2, 1.4];

const TextEditor: React.FC = () => {
  const defaultContent = localStorage.getItem("content");
  const initText: string = initValue.initValue;

  const messageToast = (txt: string): React.ReactText => toast.success(txt);
  return (
    <Editor
      apiKey={REACT_APP_TINY_API_KEY}
      initialValue={!defaultContent ? initText : defaultContent}
      init={{
        contextmenu: "link",
        menubar: false,
        plugins: "link ",
        toolbar:
          "fontselect fontweight fontsizeselect forecolor lineheight letterspace " +
          "alignleft aligncenter alignright alignjustify save",
        lineheight_formats: "100% 110% 120% 130% 140% 150% 200%",
        statusbar: false,
        content_style:
          "body {font-size: 14pt; line-height: 26px; weight: 700; }",
        setup: function (editor) {
          editor.ui.registry.addMenuButton("fontweight", {
            text: "Font weight",
            fetch: (callback) => {
              const items: object[] = weightList.map((i: number) =>
                addTextStyle(i, editor, "font-weight")
              );
              callback(items);
            }
          });

          // letter btn
          editor.ui.registry.addMenuButton("letterspace", {
            text: "Spacing",
            fetch: (callback) => {
              const items: object[] = letterSpaceList.map((i: number) =>
                addTextStyle(i, editor, "letter-spacing", "px")
              );
              callback(items);
            }
          });

          //save content
          editor.ui.registry.addButton("save", {
            text: "Save Changes",
            onAction: (_): void => {
              onSaveContent(editor);
              messageToast("Content saved is successfully.");
            }
          });
        }
      }}
    />
  );
};

export default TextEditor;
