import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import logo from "../assets/logo.webp";
import { IoHome } from "react-icons/io5";
import { Link } from "react-router-dom";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { FaComments } from "react-icons/fa";
import { PiUserSoundFill } from "react-icons/pi";
import { FaBlog } from "react-icons/fa";
const AppSidebar = () => {
  return (
    <Sidebar>
      <SidebarHeader className="bg-white">
                <img src={logo} width={120} />
            </SidebarHeader>
            <SidebarContent className="bg-white">
        <SidebarGroup>
          <SidebarMenu>

            <SidebarMenuItem>
              <SidebarMenuButton>
                <IoHome/>
                <Link to="">Home</Link>
              </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <SidebarMenuButton>
                <BiSolidCategoryAlt/>
                <Link to="">Category</Link>
              </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <SidebarMenuButton>
                <FaBlog/>
                <Link to="">Blogs</Link>
              </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <SidebarMenuButton>
                <FaComments/>
                <Link to="">Comments</Link>
              </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <SidebarMenuButton>
                <PiUserSoundFill/>
                <Link to="">User</Link>
              </SidebarMenuButton>
            </SidebarMenuItem>

            
          </SidebarMenu>
        </SidebarGroup>


        <SidebarGroup>
            <SidebarGroupLabel>
                Category
            </SidebarGroupLabel>
          <SidebarMenu>

            <SidebarMenuItem>
              <SidebarMenuButton>
                <IoHome/>
                <Link to="">Category Items</Link>
              </SidebarMenuButton>
            </SidebarMenuItem>

            
          </SidebarMenu>
        </SidebarGroup>

        
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
};

export default AppSidebar;
