import { MenuItem } from './menu.model';
 
export const MENU: MenuItem[] = [
    // {
    //     id: 2,
        // label: 'MENUITEMS.DASHBOARDS.TEXT',
        // icon: 'bx-home-circle',
        // subItems: [
            // {
            //     id: 3,
            //     label: 'MENUITEMS',
            //     link: '/dashboard',
            //     parentId: 2
            // },
            // {
            //     id: 4,
            //     label: 'CREATEUSER', // Fixed typo
            //     link: '/create-user-form',
            //     parentId: 2
            // },
            // {
            //     id: 5,
            //     label: 'default', 
            //     link: '/default',
            //     parentId: 2
            // },
    //     ], 
    // },
    { 
        id:6,
        label: 'MATERIAL-MOVEMENT.TEXT',
        icon: 'bx-home-circle',
        subItems: [
            {
                id: 7,
                label: 'Purchase-Requistion',
                link: '/material-movement/purchaserequistioncreation',
                parentId: 6
            },
            {
                id: 8,
                label: 'Purchase-Modification',
                link: '/material-movement/purchaserequistionmodification',
                parentId: 6
            },
            {
                id: 9,
                label: 'Purchase-Requition-List',
                link: '/material-movement/listofpurchaserequisitioncomponent',
                parentId: 6
            },
            {
                id: 10,
                label: 'MB52-Stock-Overview',
                link: '/material-movement/mb52-stock-overviewcomponent',
                parentId: 6
            },
        ]    

    },
];