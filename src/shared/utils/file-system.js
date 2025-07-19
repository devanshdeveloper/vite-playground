import { FileTypes } from "../constants/files";

export default class FileManager {
  constructor(files, currentPath = "/") {
    this.files = files;
    this.currentPath = currentPath;
    this.breadcrumbs = [];
  }

  // Helper method to navigate through the structure by path
  #getFileStructure(pathArray, files) {
    let currentFiles = files || this.files;
    for (let segment of pathArray) {
      const file = currentFiles.find((file) => file.name === segment);
      if (!file || !file.children) return file;
      currentFiles = file.children;
    }
    return currentFiles;
  }

  // Get file by exact path
  getFileByPath(path) {
    const pathArray = this.#parsePath(path);
    const name = pathArray.pop();
    const parentFiles = this.#getFileStructure(pathArray);
    return parentFiles
      ? parentFiles.find((file) => file.name === name) || null
      : null;
  }

  // Get all files in a directory by path
  getFilesByPath(path) {
    console.log({ path });
    const pathArray = this.#parsePath(path);
    return this.#getFileStructure(pathArray) || [];
  }

  // Navigate to a directory
  navigate(path) {
    const newPath = this.#resolvePath(path);
    const parsedPath = this.#parsePath(newPath);
    console.log({parsedPath , newPath , path});
    

    if (this.#getFileStructure(parsedPath)) {
      this.currentPath = newPath;
      this.#updateBreadcrumbs();

      return this.currentPath;
    } else {
      throw new Error(`Path not found: ${path}`);
    }
  }

  // Go back one level
  back() {
    if (this.currentPath === "/") return;
    const pathArray = this.#parsePath(this.currentPath);
    pathArray.pop();
    this.currentPath = pathArray.length ? `/${pathArray.join("/")}` : "/";
    this.#updateBreadcrumbs();
  }

  // Generate breadcrumbs based on current path
  #updateBreadcrumbs() {
    const pathArray = this.#parsePath(this.currentPath);
    this.breadcrumbs = pathArray.map((segment, index) => ({
      name: segment,
      path: `/${pathArray.slice(0, index + 1).join("/")}`,
    }));
  }

  // Parse a path string into an array
  #parsePath(path) {
    const decodedPath = decodeURIComponent(path); // Decode any encoded parts of the path
    return decodedPath === "/"
      ? []
      : decodedPath.split("/").filter((segment) => segment);
  }

  // Resolve relative or absolute paths to absolute paths
  #resolvePath(path) {
    const decodedPath = decodeURIComponent(path); // Decode before resolving
    if (decodedPath.startsWith("/")) return decodedPath;
    const currentPathArray = this.#parsePath(this.currentPath);
    const relativePathArray = this.#parsePath(decodedPath);
    for (let segment of relativePathArray) {
      if (segment === "..") {
        currentPathArray.pop();
      } else if (segment !== ".") {
        currentPathArray.push(segment);
      }
    }
    return `/${currentPathArray.join("/")}`;
  }
}
