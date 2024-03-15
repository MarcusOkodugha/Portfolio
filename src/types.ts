export type ProjectContainerProps = {  
    title: string;
    link?: string;
    description?: string;
    longDescription?: string;
    technologies?: TechnologyProps[];
    useWebsiteContainer?: boolean;
    showImage?: boolean;
    imgPath?: string;
    imgWidth?: string;
    gitLink?: string;
    downloadLink?: string;
};  

export type TechnologyProps = {
    imgPath: string;
    title: string;
}
