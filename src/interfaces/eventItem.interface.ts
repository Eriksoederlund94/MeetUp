export interface EventComment {
    id: string;
    comment: string;
    createdAt: string;
}

export interface EventItem {
    id: string;
    eventName: string;
    date: Date;
    time: string;
    description: string;
    creator: string;
    imageUrl: string;
    comments: EventComment[];
}
