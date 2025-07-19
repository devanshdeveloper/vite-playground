import { useLocation, useNavigate } from "react-router";
import FileManager from "../utils/file-system";
import files, { FileTypes } from "../constants/files";
import Each from "../components/comman/Each";
import FileCard from "../components/file-system/file-card";
import { File, FolderOpen } from "lucide-react";
import { useEffect, useState } from "react";

function IndexPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [Element, setElement] = useState(null);
  const filesManager = new FileManager(files, location.pathname);
  const currentFiles = filesManager.getFilesByPath(location.pathname);

  useEffect(() => {
    const file = filesManager.getFileByPath(location.pathname);
    setElement(file?.element || null);
  }, [location.pathname]);

  if (Element) {
    return <Element />;
  }

  return (
    <div className="flex items-center justify-center">
      <Each
        className={
          "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-10 w-[min(1200px,90vw)]"
        }
        keyExtractor={(file) => file.name}
        items={currentFiles}
        render={(file) => {
          if (file.type === FileTypes.Folder) {
            return (
              <FileCard
                name={file.name}
                onClick={() => {
                  navigate(filesManager.navigate(file.name));
                }}
                icon={<FolderOpen size={40} strokeWidth={1} />}
              />
            );
          }
          if (file.type === FileTypes.Element) {
            return (
              <FileCard
                name={file.name}
                onClick={() => {
                  navigate(filesManager.navigate(file.name));
                }}
                icon={<File size={40} strokeWidth={1} />}
              />
            );
          }

          return <FileCard {...file} />;
        }}
      />
    </div>
  );
}

export default IndexPage;
