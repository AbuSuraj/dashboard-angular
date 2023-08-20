import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  menu = [
    {
      id: 1,
      title: "Activity",
      listItems: [
        {
          id: 1,
          title: "Dashboard",
          url: "/",
          icon: "home.svg",
        },
        {
          id: 2,
          title: "Orders",
          url: "/orders",
          icon: "order.svg",
        },
        {
          id: 3,
          title: "Clients",
          url: "/clients",
          icon: "user.svg",
        },
        {
          id: 4,
          title: "Files",
          url: "/files",
          icon: "file.svg",
        },
        {
          id: 5,
          title: "Tickets",
          url: "/files",
          icon: "message.png",
        },
      ],
    },
    {
      id: 2,
      title: "Billing",
      listItems: [
        {
          id: 1,
          title: "Invoices",
          url: "/invoices",
          icon: "invoice.png",
        },
        {
          id: 2,
          title: "Subscriptions",
          url: "/subscriptions",
          icon: "subscription.png",
        },
      ],
    },
    {
      id: 3,
      title: "Marketing",
      listItems: [
        {
          id: 1,
          title: "Coupons",
          url: "/coupons",
          icon: "coupon.png",
        },
        {
          id: 2,
          title: "Affiliates",
          url: "/affialiates",
          icon: "note.svg",
        },
        
      ],
    },
    {
      id: 4,
      title: "Setup",
      listItems: [
        {
          id: 1,
          title: "Services",
          url: "/services",
          icon: "service.png",
        },
        {
          id: 2,
          title: "Forms",
          url: "/forms",
          icon: "form.svg",
        },
        // {
        //   id: 3,
        //   title: "Modules",
        //   url: "/",
        //   icon: "backup.svg",
        // },
        // {
        //   id: 4,
        //   title: "Integrations",
        //   url: "/",
        //   icon: "backup.svg",
        // },
        // {
        //   id: 5,
        //   title: "Settings",
        //   url: "/",
        //   icon: "setting.svg",
        // },
        
        
      ],
    },
    // {
    //   id: 5,
    //   title: "analytics",
    //   listItems: [
    //     {
    //       id: 1,
    //       title: "Charts",
    //       url: "/",
    //       icon: "chart.svg",
    //     },
    //     {
    //       id: 2,
    //       title: "Logs",
    //       url: "/",
    //       icon: "log.svg",
    //     },
    //   ],
    // },
  ];

  constructor() { }

  getMenu() {
    return this.menu;
  }
}
