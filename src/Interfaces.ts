export interface Positions {
    positions: any;
    loading: boolean;
    error: any;
}

export interface Position {
    id: string;
    type: string;
    url: string;
    created_at: string;
    company: string;
    company_url: string;
    location: string;
    title: string;
    description: string;
}