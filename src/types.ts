export type ProjectContainerProps = {  
    title: string;
    link?: string;
    description?: string;
    longDescription?: string;
    technologies?: TechnologyProps[];
};  

export type TechnologyProps = {
    imgPath: string;
    title: string;
}
