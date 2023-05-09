import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';
import PlayNormalGame from '../views/normal-games/play-normal-game';

//games setup routing
const NormalGame = Loadable(lazy(() => import('views/normal-games/NormalGameSetup')));
const DoublesGame = Loadable(lazy(() => import('views/doubles-games/DoublesGamesSetup')));
const FreeForAll = Loadable(lazy(() => import('views/free-for-all/FreeForAllSetup')));
// archived routing
const ArchivedGames = Loadable(lazy(() => import('views/archived/ArchivedGames')));

// auth-forms
// sample page routing
const SamplePage = Loadable(lazy(() => import('views/sample-page')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: 'normal-game',
            element: <NormalGame />
        },
        {
            path: 'normal-game/:title',
            element: <PlayNormalGame />
        },
        {
            path: 'doubles-game',
            element: <DoublesGame />
        },
        {
            path: 'free-for-all',
            element: <FreeForAll />
        },
        {
            path: 'archived-games',
            element: <ArchivedGames />
        },
        {
            path: 'archived-games/:id',
            element: <ArchivedGames />
        },
        {
            path: 'sample-page',
            element: <SamplePage />
        }
    ]
};

export default MainRoutes;
