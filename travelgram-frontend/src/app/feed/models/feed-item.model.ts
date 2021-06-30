export interface FeedItem {
    id: number;
    url: string;
    destination: string;
    country: string;
    beenthere: string;
    createdAt: Date;
    
}


export const feedItemMocks: FeedItem[] = [
    {
    id: 0,
    url: '/assets/mock/xander0.jpg',
    destination: 'Suntec City',
    country: 'Singapore',
    beenthere: 'No',
    createdAt: new Date()
    },
    {
    id: 0,
    url: '/assets/mock/xander1.jpg',
    destination: 'Yosemite',
    country: 'USA',
    beenthere: 'Yes',
    createdAt: new Date()
    },
    {
    id: 0,
    url: '/assets/mock/xander2.jpg',
    destination: 'Tokyo Tower',
    country: 'Japan',
    beenthere: 'Yes',
    createdAt: new Date()
    }
];