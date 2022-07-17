export interface Group {
    name: string;
    connections: Connection[]
}

interface Connection {
    connectionID: string;
    username: string;
}