export declare class Project {
    id: number;
    title: string;
    slug: string;
    summary: string;
    content: string;
    coverImage?: string;
    tags?: string;
    liveUrl?: string;
    repoUrl?: string;
    displayOrder: number;
    publishedAt?: Date;
    createdAt: Date;
    updatedAt: Date;
}
