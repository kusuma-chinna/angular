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
                label: 'purchase-requistion',
                link: '/material-movement/purchaserequistioncreation',
                parentId: 6
            },
            {
                id: 8,
                label: 'purchase-modification',
                link: '/material-movement/purchaserequistionmodification',
                parentId: 6
            },
            {
                id: 9,
                label: 'list-of-purchaserequisitioncomponent',
                link: '/material-movement/listofpurchaserequisitioncomponent',
                parentId: 6
            },
            {
                id: 10,
                label: 'mb52-stock-overviewcomponent',
                link: '/material-movement/mb52-stock-overviewcomponent',
                parentId: 6
            },
        ]    

    },
];