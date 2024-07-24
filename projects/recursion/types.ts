
export type FolderType = {
    folderName: string;
    folders?: FolderType[];
}

export type FolderProps = {
    folder: FolderType;
}
