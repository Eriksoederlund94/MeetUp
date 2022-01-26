export interface EventComment {
    id: string;
    comment: string;
}

export interface EventItem {
    id: string;
    eventName: string;
    date: string;
    time: string;
    description: string;
    creator: string;
    imageUrl: string;
    comments: EventComment[];
    day: number;
}
