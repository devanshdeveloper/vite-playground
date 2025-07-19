import { lazy } from "react";

export const FileTypes = {
  Folder: "folder",
  Redirect: "redirect",
  Iframe: "iframe",
  Element: "element",
};

const files = [
  {
    type: FileTypes.Folder,
    name: "Open Source",
    children: [
      {
        type: FileTypes.Element,
        name: "lang-json",
        element : lazy(() => import("../../lang-json/editor.jsx"))
      },
    ],
  },
  {
    type: FileTypes.Folder,
    name: "Framer Motion",
    children: [
      {
        type: FileTypes.Folder,
        name: "Examples",
        children: [
          {
            type: FileTypes.Element,
            name: "Examples",
          },
        ],
      },
    ],
  },
  {
    type: FileTypes.Folder,
    name: "Games",
    children: [
      {
        type: FileTypes.Iframe,
        name: "just a game",
      },
    ],
  },
];

export default files;
