export interface Admin {
    status: boolean;
    result: Result[];
}

export interface Result {
    
    aid:         number;
    name:        string;
    surname:     string;
    email:       string;
    password:    string;
    title:       string;
    description: string;
    status:      boolean;
}
