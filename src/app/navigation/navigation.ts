import { FuseNavigation } from '@fuse/types';

export const navigation: FuseNavigation[] = [
    {
        id       : 'dashBoard',
        title    : 'Applications',
        type     : 'group',
        children : [
            {
                id       : 'dashBoard',
                title    : 'DashBoard',
                type     : 'item',
                icon     : 'dashboard',
                url      : '/dashboard',
            },
            {
                id       : 'map',
                title    : 'Corona Map',
                type     : 'item',
                icon     : 'map',
                url      : '/corona-map',
            }
        ]
    }
];
