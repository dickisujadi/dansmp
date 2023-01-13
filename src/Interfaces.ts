export interface Positions {
    positions: [];
    loading: boolean;
    error: any;
    position: Position;
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