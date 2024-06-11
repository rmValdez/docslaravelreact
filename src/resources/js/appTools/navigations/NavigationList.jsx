import React, { Fragment, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Box, Divider } from '@mui/material';
import { PAGE_SECTIONS } from '../../enums/pageSections/coreSections';
import { PAGE_LIST } from '../../routes/corePages';
import { NavItem } from './NavItem';
import { NavSectionTitle } from './NavSectionTitle';
import { NavNested } from './NavNested';
import { NO_SECTION_PAGE_LIST } from '../../routes/noSection/noSection';
import { stripDynamicPath } from '../../helpers/routeHelper';
import { NavBox, NavInnerBox, NavMySectionBox } from './NavBox';
import { MY_ACCOUNT_PAGE_LIST } from '../../routes/myAccount/myAccountRoutes';
import { sortMultidimensional } from '../../helpers/arrayHelpers';
import { useUserInfo } from '../../states/store';

const getGroupSection = (sect, hasPermission) => {
  const filteredPage = [...PAGE_LIST] ?? [];
  return filteredPage.filter((page) => page.section == sect)
    .filter((page) => {
      if (!page.permission) {
        return false;
      }
      return hasPermission(page.permission);
    })
    .sort(sortMultidimensional);
};

export const NavigationList = () => {
  const [openNested, setOpenNested] = useState('');
  const [, { hasPermission }] = useUserInfo();
  const { pathname } = useLocation();

  const handleNestedChange = (group) => {
    setOpenNested((prev) => prev == group ? '' : group);
  };

  const memoizeSections = useMemo(() => {
    const sections = [...Object.values(PAGE_SECTIONS)];

    return sections.map((section) => {
      const sectionPages = getGroupSection(section, hasPermission);
      const isHidden = sectionPages.length == 0;
      const mainPage = sectionPages.filter(page => {
        if (page.hidden || isHidden) {
          return false;
        }
        if (page.main == undefined && !page.groupBy) {
          return true;
        }
        return page?.main;
      });
      const groupPage = sectionPages.filter((page) => page?.groupBy == openNested).filter((page) => {
        if (!page.permission) {
          return false;
        }
        if (hasPermission(page.permission)) {
          return true;
        }
        return true;
      });
      return {
        name: section,
        height: `calc(${mainPage?.length * 32}px + ${groupPage.length > 0 ? groupPage.length * 33 : 23}px)`,
        isHidden: isHidden,
        sectionPages: sectionPages,
        mainLength: mainPage?.length,
        groupLength: groupPage?.length,
        mainPage: mainPage,
      };
    });
  }, [PAGE_SECTIONS, openNested]);

  return (
    <NavBox>
      {
        NO_SECTION_PAGE_LIST.map((page, idx) => {
          if (hasPermission(page.permission)) {
            return (<NavItem
              key={`${page.key}-${idx}`}
              listKey={`${page.key}-${idx}`}
              title={page.title}
              path={page.path}
              linkIcn={page.icon}
              activeNav={pathname == page.path}
            />);
          }
        })
      }
      <NavSectionTitle section={'My Account'}>
        <NavMySectionBox>
          {
            MY_ACCOUNT_PAGE_LIST.map((page, idx) => {
                if (page?.groupBy != undefined) {
                  return (
                    <NavNested
                      key={idx}
                      page={page}
                      handleNestedChange={(group) => handleNestedChange(group)}
                      openNested={openNested}
                    />
                  );
                } else {
                  const path = stripDynamicPath(page.path);
                  return (
                    <NavItem
                      key={`${page.key}-${idx}`}
                      listKey={`${page.key}-${idx}`}
                      title={page.title}
                      path={path}
                      linkIcn={page.icon}
                      activeNav={pathname == path}
                    />
                  );
                }
              
            })
          }
        </NavMySectionBox>
      </NavSectionTitle>
      <Divider variant='middle' flexItem sx={{display: memoizeSections.filter((page) => page.isHidden).length == memoizeSections.length && 'none'}}/>
      <NavInnerBox height={'100%'}>
        {
          memoizeSections.map((section, oidx) => {
            return (
              <Fragment key={oidx}>
                <Box sx={{
                  display: section.isHidden ? 'none' : 'block',
                  marginBottom: '2px',
                  height: section.height,
                }}>
                  <NavSectionTitle section={section.name} hide={section.isHidden}>
                    {
                      section.sectionPages && section.sectionPages?.map((page, iidx) => {
                        if (!page.hasOwnProperty('hidden')) {
                          if (page?.groupBy != undefined) {
                            return (
                              <NavNested
                                key={iidx}
                                page={page}
                                handleNestedChange={(group) => handleNestedChange(group)}
                                openNested={openNested}
                              />
                            );
                          } else {
                            const path = stripDynamicPath(page.path);
                            return (
                              <NavItem
                                key={`${page.key}-${iidx}`}
                                listKey={`${page.key}-${iidx}`}
                                title={page.title}
                                path={path}
                                linkIcn={page.icon}
                                activeNav={pathname == path}
                              />
                            );
                          }
                        }
                      })
                    }
                  </NavSectionTitle>
                </Box>
              </Fragment>
            );
          })
        }
      </NavInnerBox>
    </NavBox>
  );
};
