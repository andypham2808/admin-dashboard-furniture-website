/** @format */

import React from "react";
import { Link } from "react-router-dom";

import {
  SidebarContainer,
  SidebarWrapper,
  SidebarMenu,
  SidebarTitle,
  SidebarList,
  SidebarListItem,
  MyLineStyle,
  MyTimeline,
  MyTrendingUp,
  MyPermIdentity,
  MyStorefront,
  MyAssessment,
  MyDrafts,
  MyLocalAtm,
  MyFeedback,
  MyForum,
  MyWork,
  MyPieChart,
  MyReceipt,
} from "../../components/Sidebar/SidebarElements";

const Sidebar = () => {
  return (
    <SidebarContainer>
      <SidebarWrapper>
        {/* <SidebarMenu>
          <SidebarTitle>Dashboard</SidebarTitle>
          <SidebarList>
            <Link to="/" className="link">
              <SidebarListItem>
                <MyLineStyle />
                Home
              </SidebarListItem>
            </Link>
            <SidebarListItem>
              <MyTimeline />
              Analytics
            </SidebarListItem>
            <SidebarListItem>
              <MyTrendingUp />
              Sales
            </SidebarListItem>
          </SidebarList>
        </SidebarMenu> */}
        <SidebarMenu>
          <SidebarTitle>All Menu</SidebarTitle>
          <SidebarList>
            <Link to="/users" className="link">
              <Link to="/" className="link">
                <SidebarListItem>
                  <MyLineStyle />
                  Home
                </SidebarListItem>
              </Link>
              <SidebarListItem>
                <MyPermIdentity />
                Users
              </SidebarListItem>
            </Link>
            <Link to="/products" className="link">
              <SidebarListItem>
                <MyStorefront />
                Products
              </SidebarListItem>
            </Link>
            <SidebarListItem>
              <MyAssessment />
              Reports
            </SidebarListItem>
            <SidebarListItem>
              <MyLocalAtm />
              Transactions
            </SidebarListItem>
          </SidebarList>
        </SidebarMenu>
        <SidebarMenu>
          <SidebarTitle>Connect</SidebarTitle>
          <SidebarList>
            <SidebarListItem>
              <MyDrafts />
              Mail
            </SidebarListItem>
            <SidebarListItem>
              <MyFeedback />
              Feedback
            </SidebarListItem>
            <SidebarListItem>
              <MyForum />
              Messages
            </SidebarListItem>
          </SidebarList>
        </SidebarMenu>
        <SidebarMenu>
          <SidebarTitle>Employees</SidebarTitle>
          <SidebarList>
            <SidebarListItem>
              <MyWork />
              Manage
            </SidebarListItem>
            <SidebarListItem>
              <MyPieChart />
              Analytics
            </SidebarListItem>
            <SidebarListItem>
              <MyReceipt />
              Reports
            </SidebarListItem>
          </SidebarList>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
