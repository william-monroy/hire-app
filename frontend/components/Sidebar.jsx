import React, { useContext } from "react";
import styles from "./Sidebar.module.css";
import SidebarItem from "./SidebarItem";

import { AiOutlineHome } from "react-icons/ai";
import {
  HiOutlineBriefcase,
  HiOutlineAnnotation,
  HiOutlineOfficeBuilding,
  HiOutlineUserGroup,
  HiOutlineClipboardCheck,
  HiOutlineCog,
  HiOutlineSearch,
  HiOutlineHeart,
  HiOutlineDocumentText,
} from "react-icons/hi";
import AuthContext from "../context/authContext";
import { Text } from "@nextui-org/react";
// import Image from '/public/assets'

const Sidebar = ({ current = 0 }) => {
  const { user } = useContext(AuthContext);
  return (
    <div className={styles.Sidebar}>
      {user != null ? (
        <>
          <div className={styles.Sidebar__top}>
            <div className={styles.Sidebar__header}>
              <img
                src="/assets/denso-logo.png"
                alt="Denso logo"
                width="150px"
                className={styles.densoLogo}
              />
              <img
                src="/assets/d-logo.png"
                className={styles.dLogo}
                alt="Denso logo"
              />
            </div>
            <div className={styles.Sidebar_section}>
              <h3 className={styles.Sidebar__title}>MENU</h3>

              <SidebarItem
                icon={<AiOutlineHome />}
                title="Inicio"
                active={current == 0 ? true : false}
                to="/dashboard/home"
              />
              {user != null ? (
                <>
                  {user.admin ? (
                    <SidebarItem
                      icon={<HiOutlineBriefcase />}
                      title="Publicaciones de Puestos"
                      active={current == 1 ? true : false}
                      to="/dashboard/posts"
                    />
                  ) : (
                    <SidebarItem
                      icon={<HiOutlineSearch />}
                      title="Buscar Trabajo"
                      active={current == 9 ? true : false}
                      to="/dashboard/find-jobs"
                    />
                  )}
                  <SidebarItem
                    icon={<HiOutlineAnnotation />}
                    title="Mensajes"
                    active={current == 2 ? true : false}
                    to="/dashboard/messages"
                  />
                  {user.admin ? (
                    <SidebarItem
                      icon={<HiOutlineOfficeBuilding />}
                      title="Perfil de la Empresa"
                      active={current == 3 ? true : false}
                      to="/dashboard/company-profile"
                    />
                  ) : (
                    <SidebarItem
                      icon={<HiOutlineHeart />}
                      title="Vida en Denso"
                      active={current == 10 ? true : false}
                      to="/dashboard/life-at-denso"
                    />
                  )}
                  {user.admin ? (
                    <>
                      <SidebarItem
                        icon={<HiOutlineUserGroup />}
                        title="Aplicantes"
                        active={current == 4 ? true : false}
                        to="/dashboard/applicants"
                      />
                      <SidebarItem
                        icon={<HiOutlineClipboardCheck />}
                        title="Revisar Solicitudes"
                        active={current == 5 ? true : false}
                        to="/dashboard/review"
                      />
                    </>
                  ) : (
                    <>
                      <SidebarItem
                        icon={<HiOutlineBriefcase />}
                        title="Mis Solicitudes"
                        active={current == 7 ? true : false}
                        to="/dashboard/my-applications"
                      />
                      <SidebarItem
                        icon={<HiOutlineDocumentText />}
                        title="Mi Currículum"
                        active={current == 8 ? true : false}
                        to="/dashboard/my-resume"
                      />
                    </>
                  )}
                </>
              ) : null}

              <SidebarItem
                icon={<HiOutlineCog />}
                title="Ajustes"
                active={current == 6 ? true : false}
                to="/dashboard/settings"
              />
            </div>
          </div>
          <div className={styles.Sidebar__bottom}>
            <div className={styles.Sidebar_user}>
              <div className={styles.Sidebar_user__avatar}>
                <img
                  src={user != null ? user.avatar : ""}
                  height="45"
                  width="45"
                  style={{ borderRadius: "50%", border: "2px solid #DC0032" }}
                  alt={user != null ? user.fname : ""}
                />
              </div>
              <div className={styles.Sidebar_user__info}>
                <Text size={16} margin="0px" b>
                  {user != null ? user.fname : ""}{" "}
                  {user != null ? user.lname : ""}
                </Text>
                <Text size={13} margin="0px" color="gray">
                  {user != null ? user.email : ""}
                </Text>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default Sidebar;
