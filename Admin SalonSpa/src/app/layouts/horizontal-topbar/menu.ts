import { GlobalComponent, RoleSpa } from "src/app/app.constant";
import { MenuItem } from "./menu.model";
import { User } from "src/app/core/models/auth.models";

export function checkRole(): MenuItem[] {
  const checkRole: User = JSON.parse(
    localStorage.getItem(GlobalComponent.CUSTOMER_KEY)!
  );

  function checkRoleAdmin(): boolean {
    return checkRole?.role === RoleSpa.ROLE_ADMIN;
  }

  function checkRoleEmployee(): boolean {
    return checkRole?.role === RoleSpa.ROLE_EMPLOYEE;
  }

  function checkRoleManager(): boolean {
    return checkRole?.role === RoleSpa.ROLE_MANAGER;
  }

  return [
    {
      id: 1,
      label: "MENUITEMS.MENU.TEXT",
      isTitle: true,
      checkRole: true,
    },
    {
      id: 2,
      label: "MENUITEMS.DASHBOARD.TEXT",
      icon: "ri-dashboard-fill",
      link: "/projects",
      checkRole: checkRoleAdmin(),
    },
    {
      id: 3,
      label: "MENUITEMS.APPS.LIST.CHAT",
      link: "/chat",
      icon: "ri-question-answer-line",
      checkRole: checkRoleAdmin(),
    },
    {
      id: 4,
      label: "Contact",
      icon: "ri-file-user-line",
      link: "/entities/contacts",
      checkRole: checkRoleAdmin(),
    },
    {
      id: 5,
      label: "Employee",
      icon: "ri-file-user-fill",
      link: "/entities/employees",
      checkRole: checkRoleAdmin() || checkRoleManager(),
    },
    {
      id: 6,
      label: "Manager",
      icon: "ri-file-shield-line",
      link: "/entities/managers",
      checkRole: checkRoleAdmin(),
    },
    {
      id: 16,
      label: "Market",
      icon: "ri-shopping-cart-2-fill",
      parentId: 12,
      link: "/ecommerce/market",
      checkRole: true,
    },
    {
      id: 13,
      label: "Booking",
      icon: " bx bxl-shopify",
      link: "/ecommerce/booking",
      parentId: 12,
      checkRole: true,
    },
    {
      id: 14,
      label: "Bill",
      icon: "ri-file-list-3-fill",
      link: "/ecommerce/bill-admin",
      checkRole: checkRoleAdmin(),
      parentId: 12,
    },
    {
      id: 15,
      label: "Bill",
      icon: "ri-file-list-3-fill",
      link: "/ecommerce/bill-employee",
      checkRole: !checkRoleAdmin(),
      parentId: 12,
    },
    {
      id: 7,
      label: "Entities",
      icon: "ri-dashboard-2-line",
      checkRole: checkRoleAdmin(),
      subItems: [
        {
          id: 11,
          label: "Services",
          link: "entities/services",
          parentId: 7,
          checkRole: true,
        },
        {
          id: 8,
          label: "Branches",
          link: "/entities/branches",
          parentId: 7,
          checkRole: true,
        },
        {
          id: 9,
          label: "Notifications",
          link: "entities/notifications",
          parentId: 7,
          checkRole: true,
        },
        {
          id: 10,
          label: "Posts",
          link: "entities/posts",
          parentId: 7,
          checkRole: true,
        },
      ],
    },
    {
      id: 17,
      label: "MENUITEMS.LANDING.TEXT",
      icon: "ri-rocket-line",
      link: "/landing/booking",
      checkRole: true,
    },
  ];
}
