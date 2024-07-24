import { FolderType } from "./types";

export const data: FolderType[] = [
    { folderName: 'Home', folders: [
        {
            folderName: 'Movies',
            folders: [
                { 
                    folderName: 'Action', 
                    folders: [
                        {
                            folderName: '2000s',
                            folders: [
                                { folderName: 'My-Movie.mp4'},
                                { folderName: 'no-movie.mp4'},
                                { folderName: 'moo-vee.mp4'},
                                { folderName: 'the-one.mp4'},

                            ]
                        },
                        {
                            folderName: '2010s',
                            folders: [{ folderName: 'My-Movie.mp4'},]
                        }
                    ]   
                },
                { 
                    folderName: 'Sports', 
                    folders: [                        
                        {
                            folderName: '2000s',
                            folders: [
                                { folderName: 'sports.mp4'},
                                { folderName: 'football.mp4'},
                                { folderName: 'basketball.mp4'},
                                { folderName: 'the-one.mp4'},

                            ]
                        },
                        {
                            folderName: '2010s',
                            folders: [{ folderName: 'Lebron.mp4'},{ folderName: 'kobe.mp4'},]
                        }] 
                }
            ]
        },
        { folderName: 'Images', folders: [] },
        { folderName: 'Games', folders: [] },
        { folderName: 'Documents', folders: [] },
        { folderName: 'Podcast', folders: [] }

    ]},
    {
        folderName: 'Password.txt'
    }
];