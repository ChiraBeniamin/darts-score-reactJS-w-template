// assets
import { IconPalette, IconShadow, IconTypography, IconWindmill } from '@tabler/icons';

// constant
const icons = {
    IconTypography,
    IconPalette,
    IconShadow,
    IconWindmill
};

// ==============================|| UTILITIES MENU ITEMS ||============================== //

const archived = {
    id: 'archived',
    title: 'Archived Games',
    type: 'group',
    children: [
        {
            id: 'archived',
            title: 'Archived Games',
            type: 'item',
            url: '/archived-games',
            icon: icons.IconTypography,
            breadcrumbs: false
        }
    ]
};

export default archived;
