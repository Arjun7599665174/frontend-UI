import {
  LayoutDashboard,
  Users,
  Wallet,
  FileText,
  Database,
  Bell,
  Settings,
  Building2,
  BadgeCheck,
  CalendarDays,
} from "lucide-react";

export const sidebarData = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    page: "dashboard",
  },
  {
    title: "Employees",
    icon: Users,
    page: "employees",
  },
  {
    title: "Payroll",
    icon: Wallet,
    page: "payroll",
  },
  {
    title: "Pay Slips",
    icon: FileText,
    page: "payslips",
  },
  {
    title: "Masters",
    icon: Database,
    page: "masters",
    children: [
      { title: "Departments", icon: Building2, page: "departments" },
      { title: "Designations", icon: BadgeCheck, page: "designations" },
      { title: "Holidays", icon: CalendarDays, page: "holidays" },
    ],
  },
 /* {
    title: "Notifications",
    icon: Bell,
    page: "notifications",
    badge: 3,
  },*/
  {
    title: "Settings",
    icon: Settings,
    page: "settings",
  },
];