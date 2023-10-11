export interface User {
    status: boolean;
    result: Result[];
}

export interface Result {
    
    uid:         number;
    name:        string;
    surname:     string;
    email:       string;
    password:    string;
    title:       string;
    description: string;
    status:      boolean;
}
