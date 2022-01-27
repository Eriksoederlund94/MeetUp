import { nanoid } from 'nanoid';
import { EventItem } from './interfaces/eventItem.interface';

export const mockEvents: EventItem[] = [
    {
        id: nanoid(),
        eventName: 'Coding Session',
        date: new Date('2022-01-11'),
        time: '11:00',
        description: `Coding with Chris will teach you to understand everything about programming and how to do it. You will learn about lowDB the exicited language HTML. In the session you will also learn about CSS and WordPress.`,
        creator: 'Chris',
        imageUrl: `https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80`,
        comments: [],
    },
    {
        id: nanoid(),
        eventName: 'Learn React',
        date: new Date('2022-02-26'),
        time: '17:00',
        description: `Learn all about react, how to use it and why it is the best tool for your apllications. You will learn how to set up your components, react-hooks and much more. This seassion is for beginners.`,
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
        description: `There is alot to learn about how to buy Erik lunch. You will get to know him, what he likes and what type of lunch he loves. When buying the lunch you must buy a drink aswell.`,
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
            'https://images.unsplash.com/photo-1633501637812-7e2058fddcc8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1750&q=80',
        comments: [],
    },
    {
        id: nanoid(),
        eventName: 'Playing board games',
        date: new Date('2022-03-29'),
        time: '13:00',
        description: `Welcome to play board games with us! Some of the organizers will be bringing games but you can also bring you own games if you want to.
`,
        creator: 'Daniel',
        imageUrl:
            'https://images.unsplash.com/photo-1606167668584-78701c57f13d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Ym9hcmRnYW1lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        comments: [],
    },
    {
        id: nanoid(),
        eventName: 'Creative Writing',
        date: new Date('2022-04-03'),
        time: '19:00',
        description: `Welcome to another opportunity to meet fellow writers, share experiences, and develop your creative writing skills. Every session has two or three key agenda items, depending on the availability of submitted work. But we are always open to new suggestions `,
        creator: 'Max',
        imageUrl:
            'https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d3JpdGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        comments: [],
    },
];
