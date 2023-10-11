export interface ITicket {
    status?: boolean;
    result?: Result;
}

export interface Result {
    tid?:               number;
    requester?:         null;
    statusType?:        string;
    tickedType?:        string;
    solutionProvider?:  string;
    subject?:           string;
    createDate?:        Date;
    resolutionDate?:    null;
    category?: string | null;
    departmantManager?: string;
    description?:       string;
    operator?:          any[];
    user?:              null;
}
