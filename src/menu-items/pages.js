// assets
import { IconKey } from '@tabler/icons';

// constant
const icons = {
    IconKey
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const pages = {
    id: 'pages',
    title: 'Games',
    caption: 'Game Types',
    type: 'group',
    children: [
        {
            id: 'games-setup',
            title: 'Play Game',
            type: 'collapse',
            icon: icons.IconKey,

            children: [
                {
                    id: 'login3',
                    title: 'Normal Game',
                    type: 'item',
                    url: '/normal-game'
                    // target:true  //<-- IF YOU WANT THE PAGE TO OPEN UP IN A SEPARATE WINDOW
                },
                {
                    id: 'register3',
                    title: 'Doubles Game',
                    type: 'item',
                    url: '/doubles-game'
                    // target:true  //<-- IF YOU WANT THE PAGE TO OPEN UP IN A SEPARATE WINDOW
                },
                {
                    id: 'register4',
                    title: 'Free for all',
                    type: 'item',
                    url: '/free-for-all'
                    // target:true  //<-- IF YOU WANT THE PAGE TO OPEN UP IN A SEPARATE WINDOW
                }
            ]
        }
    ]
};

export default pages;
