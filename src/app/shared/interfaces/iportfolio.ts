export interface IPortfolio {
    name: string;
    image_path: string;
    description: string;
    links: {
        live_demo: string,
        github: string,
    };
    technologies: string[];
}
