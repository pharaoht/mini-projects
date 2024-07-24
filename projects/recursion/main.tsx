'use client'
import { useState } from 'react';
import styles from './main.module.css';
import FolderIcon from '@mui/icons-material/Folder';
import DescriptionIcon from '@mui/icons-material/Description';
import { FolderProps, FolderType } from './types';
import { data } from './data';


const Folder: React.FC<FolderProps> = ({ folder }) => {

    const [ isOpen, setIsOpen ] = useState(false);

    const cursorType = folder.folders && folder?.folders?.length > 0 ? styles.pointer : styles.default;

    return (
        <li className={`${styles.my1_5} ${cursorType}`} >
    
            <span className={`${styles.flex} ${styles.itemsCenter} ${styles.gap1_5}`} onClick={() => setIsOpen(!isOpen)}>
                {
                    !folder.folders ? <DescriptionIcon/> : <FolderIcon className={`${styles.size6} ${styles.textSky500}`} />
                }

                {folder.folderName}
            </span>
            {
                
                isOpen && folder.folders && folder.folders.length > 0 &&
                <ul>
                    {
                        
                        folder?.folders?.map((itm: any) => (
                            <Folder folder={itm} key={itm.folderName} />
                        ))
                    }
                </ul>
            }
            
        </li>
    )
}

const RecursionProject = () => {

    const [ folderData, setFolderData ] = useState<FolderType[]>(data);

    const addToFolder = () => {}

    return (
        <div className={`${styles.p8} ${styles.maxWSm} ${styles.mxAuto}`}>
            <p>This project is done with Recursion. This is only 1 component that calls itself.</p>
            <ul>

                {
                    folderData.map((itm, idx) => (
                        <Folder folder={itm} key={itm.folderName} />
                    ))
                }
            </ul>
        </div>
    )
};

export default RecursionProject;