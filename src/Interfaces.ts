export interface Positions {
    positions: [];
    loading: boolean;
    error: any;
    position: PositionDetails;
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

export interface Search { 
    jobDescription: string;
    location: string; 
    fullTimeOnly: boolean; 
}

export interface PositionDetails {
    id: string;
    type: string;
    url: string;
    created_at: string;
    company: string;
    company_url: string;
    location: string;
    title: string;
    description: string;
    how_to_apply: string;
    company_logo: string;
}