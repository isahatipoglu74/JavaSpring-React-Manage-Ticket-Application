import { ReactNode } from "react";

export interface ITicket {
    status: boolean;
    result: Result[];
}

export interface Result {
    
    result: any;
    email: ReactNode;
   
    tid:           number;
    requester:     string;
    statusType:        string;
    tickedType:    string;
    solutionProvider:    string;
    departmantManager:       string;
    subject:       string;
    createDate:    Date;
    resolutionDate?:    Date;
    category?: string | null;
    description:   string;
    operator:      any[];
    user:          null;
}

export enum Requesting {
    Asd = "asd",
    Empty = "",
    Test = "test",
}
