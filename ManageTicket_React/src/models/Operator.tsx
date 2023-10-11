export interface Operator {
    status: boolean;
    result: Result[];
}

export interface Result {
    
    oid:         number;
    name:        string;
    surname:     string;
    email:       string;
    password:    string;
    title:       string;
    description: string;
    status:      boolean;
}
