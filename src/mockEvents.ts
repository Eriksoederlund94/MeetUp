import { nanoid } from 'nanoid';
import { EventItem } from './interfaces/eventItem.interface';

export const mockEvents: EventItem[] = [
    {
        id: nanoid(),
        eventName: 'Coding Session',
        date: new Date('2022-01-11'),
        time: '11:00',
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
        creator: 'Chris',
        imageUrl: `https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80`,
        comments: [],
    },
    {
        id: nanoid(),
        eventName: 'Learn React',
        date: new Date('2022-01-26'),
        time: '17:00',
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
        creator: 'Alex',
        imageUrl:
            'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        comments: [],
    },
    {
        id: nanoid(),
        eventName: 'Buy me lunch',
        date: new Date('2022-01-16'),
        time: '13:00',
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
        creator: 'Erik',
        imageUrl:
            'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        comments: [],
    },
    {
        id: nanoid(),
        eventName: 'Flying with dragon',
        date: new Date('2022-06-06'),
        time: '13:37',
        description: `Ever had the dream to fly with a dragon? Now is your 
        chance to do it. Join us in the fantastic outdoors event where
        you can fly a dragon with a excellent instructor that will teach
        you all about taming and flying the dragon`,
        creator: 'Alex',
        imageUrl:
            'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        comments: [],
    },
];
