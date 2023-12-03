export interface ILabDetailResponse{
    title: string;
    details: Array<IDetail>;
    bgColor: string;
}

export interface IDetail {
    content: string
}